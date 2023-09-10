import React, { useContext } from "react";
import PlaceItem from "./PlaceItem";
import { SelectedPlace } from "@/context/SelectedPlace";

function PlacesList({ placeList }) {
  const { selectedPlace, setSelectedPlace } = useContext(SelectedPlace);
  return (
    <div className="flex overflow-x-auto overflow-scroll gap-4 scrollbar-hide">
      {placeList.map((item, idx) => (
        <div onClick={() => setSelectedPlace(item)}>
          <PlaceItem place={item} key={idx} />
        </div>
      ))}
    </div>
  );
}

export default PlacesList;
