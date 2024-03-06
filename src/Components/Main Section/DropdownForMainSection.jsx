/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

const CustomDropdown = ({ itemName, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center px-4 py-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        {itemName}
        {isOpen ? (
          <GoTriangleUp className="ml-2" />
        ) : (
          <GoTriangleDown className="ml-2" />
        )}
      </div>
      {isOpen && (
        <div className="absolute bg-slate-500 mt-1 rounded-md shadow w-full">
          {data
            ? data.map((item, index) => (
                <p key={index} className="px-1 p-2 cursor-pointer">
                  {item}
                </p>
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
