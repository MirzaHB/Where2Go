"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { DarkMode } from "@/context/DarkMode";
import { Category } from "@/context/Category";

function NavBar() {
  const { data: session } = useSession();
  const { isToggled, handleToggle } = useContext(DarkMode);
  const { category, handleCategoryChange } = useContext(Category);
  const [searchInput, setSearchInput] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleCategoryChange(searchInput);
    }
  };

  const handleLogout = () => {
    signOut();
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div
      className={`flex items-center justify-between p-4 ${
        isToggled ? "text-gray-300" : ""
      }`}
    >
      <div className="flex gap-7 items-center font-medium">
        <Image src="/appIcon.jpeg" alt="logo" width={50} height={50} />
        <h2>Favourite</h2>
      </div>
      <div
        className={`bg-gray-100 p-[6px] rounded-md w-[40%] gap-3 hidden md:flex ${
          isToggled ? "bg-gray-700" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className={`outline-none w-full ${
            isToggled ? "bg-gray-700 text-gray-200" : "bg-transparent"
          }`}
          value={searchInput}
          onChange={handleSearchInputChange}
          onKeyDown={handleEnter}
        />
      </div>
      <div className="flex items-center gap-4">
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            class="sr-only peer"
            checked={isToggled}
            onChange={handleToggle}
          />
          <div
            className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300
           dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full
           peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px]
           after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
           dark:border-gray-600 peer-checked:bg-blue-600"
          ></div>
          <span
            className={`ml-3 text-sm font-medium ${
              isToggled ? "text-gray-200" : ""
            } `}
          >
            Dark/Light Mode
          </span>
        </label>
        <div>
          {session?.user ? (
            <div className="flex items-center gap-2 ">
              <button
                onClick={handleLogout}
                className={`border rounded-full px-2 py-1 text-base ${
                  isToggled
                    ? "border-gray-700 text-gray-200"
                    : "border-gray-400 text-gray-700"
                }`}
              >
                Logout
              </button>
              <Image
                className="rounded-full"
                src={session.user.image}
                alt="user-img"
                width={35}
                height={35}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
