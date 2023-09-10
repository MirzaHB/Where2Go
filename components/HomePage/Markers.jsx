import { MarkerF, OverlayView } from "@react-google-maps/api";
import React, { useContext } from "react";
import PlaceItem from "./PlaceItem";
import { SelectedPlace } from "@/context/SelectedPlace";

function Markers({ places }) {
  const { selectedPlace, setSelectedPlace } = useContext(SelectedPlace);
  return (
    <div>
      <MarkerF
        onClick={() => setSelectedPlace(places)}
        position={places.geometry.location}
        icon={{
          url: "/resturantLocation.png",
          scaledSize: { width: 30, height: 30 },
        }}
      >
        {selectedPlace.reference == places.reference ? (
          <OverlayView
            position={places.geometry.location}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="ml-[-90px] mt-[-230px]">
              <PlaceItem place={places} />
            </div>
          </OverlayView>
        ) : null}
      </MarkerF>
    </div>
  );
}

export default Markers;
