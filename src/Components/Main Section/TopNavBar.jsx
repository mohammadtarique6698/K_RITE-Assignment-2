/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

const TopNavBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <div className="w-full border rounded-md shadow-md p-2">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-lg">Products</h4>
        <div className="flex items-center gap-2">
          <div className="flex items-center border rounded-md gap-2 px-2 shadow-md">
            <FaSearch className="cursor-pointer" onClick={handleSearch} />
            <input
              type="search"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              placeholder="Search Anything..."
              className="px-2 p-1"
            />
          </div>
          <div className="p-2 border rounded-md shadow-md cursor-pointer">
            <TbMessages />
          </div>
          <div className="p-2 border rounded-md shadow-md cursor-pointer">
            <IoSettingsOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
