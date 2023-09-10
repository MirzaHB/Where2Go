import { UserLocationContext } from "@/context/UserLocationContext";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import React, { useContext, useState, useEffect } from "react";
import Markers from "./Markers";
import { SelectedPlace } from "@/context/SelectedPlace";
import { DarkMode } from "@/context/DarkMode";

function MapView({ placeList }) {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const { selectedPlace, setSelectedPlace } = useContext(SelectedPlace);
  const { isToggled, handleToggle } = useContext(DarkMode);
  const ContainerStyle = {
    width: "100%",
    height: "70vh",
  };
  const DarkModeMap = {
    mapId: "38e460b270c26e0",
  };
  const LightModeMap = {
    mapId: "4d83f3eb123266b5",
  };

  const mapOptions = isToggled ? DarkModeMap : LightModeMap;

  return (
    <div>
      <LoadScript
        mapIds={["4d83f3eb123266b5", "38e460b270c26e0"]}
        googleMapsApiKey={process.env.NEXT_GOOGLE_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={ContainerStyle}
          center={userLocation}
          options={mapOptions}
          zoom={13}
        >
          <MarkerF position={userLocation} />
          {placeList.map(
            (item, index) =>
              (index <= 7 || selectedPlace == item) && (
                <Markers places={item} key={index} />
              )
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default MapView;
