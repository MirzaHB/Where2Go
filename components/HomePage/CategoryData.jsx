import React, { useState } from "react";
import Image from "next/image";
import Data from "../../Shared/Data";

function CategoryData({ onCategoryChange }) {
  const [categoryData, setCategoryData] = useState(Data.CategoryTypeData);
  const [selectedCategory, setSelectedCategory] = useState();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {categoryData.map((item, idx) => (
          <div
            className={`flex flex-col items-center justify-center bg-gray-200 p-2 m-2 rounded-lg
             hover:scale-110 cursor-pointer border-blue-950 ${
               selectedCategory == idx ? "bg-blue-400 border-[2px]" : null
             }`}
            onClick={() => {
              setSelectedCategory(idx);
              onCategoryChange(item.value);
            }}
          >
            <Image src={item.icon} alt={item.name} width={40} height={40} />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryData;
