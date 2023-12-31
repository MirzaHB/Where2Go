import Image from "next/image";
import React from "react";

function PlaceItem({ place }) {
  const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const placePhoto = place?.photos ? place?.photos[0].photo_reference : "";
  return (
    <div
      className="w-[195px] overflow-hidden flex-shrink-0 p-2 rounded-lg hover:scale-110 
    transition-all cursor-pointer border-blue-950 bg-gray-100"
    >
      <Image
        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${placePhoto}&key=${GOOGLE_API_KEY}`}
        alt={place.name}
        width={180}
        height={80}
        className="rounded-lg object-cover h-[120px] "
      />
      <h2 className="text-[13px] font-bold mt-1 line-clamp-1">{place.name}</h2>
      <h2
        className="text-[10px] text-gray-400 
            line-clamp-2"
      >
        {place.formatted_address}
      </h2>
      <div className="flex gap-1 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-3 h-3 text-yellow-500"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="text-[10px] font-bold">{place.rating}</h2>
      </div>
    </div>
  );
}

export default PlaceItem;
