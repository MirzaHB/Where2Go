import React from "react";
import { useState, useContext } from "react";
import { DarkMode } from "@/context/DarkMode";

function RangeSelection({ onRadiusChange }) {
  const [radius, setRadius] = useState(100);
  const { isToggled, handleToggle } = useContext(DarkMode);
  return (
    <div className="mt-5 px-2">
      <h2 className={`font-bold px-2 ${isToggled ? "text-gray-300" : ""}`}>
        Select Radius (Meters)
      </h2>
      <input
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        min="100"
        max="2500"
        step="100"
        type="range"
        onChange={(e) => {
          setRadius(e.target.value);
          onRadiusChange(e.target.value);
        }}
        defaultValue={radius}
      />
      <label className={`${isToggled ? "text-gray-300" : ""}`} htmlFor="">
        {radius} Meters
      </label>
    </div>
  );
}

export default RangeSelection;
