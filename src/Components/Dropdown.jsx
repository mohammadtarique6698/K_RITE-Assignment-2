/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa6";
import { IoBagAddOutline } from "react-icons/io5";

const CustomDropdown = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className="flex justify-between items-center px-4 py-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="flex items-center gap-2">
          <FaRegFolder />
          <h1>{item}</h1>
        </div>
        {isOpen ? <FaMinus className="ml-2" /> : <FaPlus className="ml-2" />}
      </div>
      {isOpen && (
        <div className="relative w-64 mt-3 bg-white rounded mx-6 ">
          {/* Dropdown content goes here */}
          <p className="p-2 cursor-pointer">RoadMap</p>
          <p className="p-2 cursor-pointer">FeedBack</p>
          <p className="p-2 cursor-pointer">Performance</p>
          <p className="p-2 cursor-pointer">Team</p>
          <p className="p-2 cursor-pointer">Analytics</p>
          <div className="flex items-center gap-2 p-2 cursor-pointer">
            <IoBagAddOutline />
            <p>Add new tab</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
