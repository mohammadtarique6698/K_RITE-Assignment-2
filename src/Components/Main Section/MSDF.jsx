/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { TbBrand4Chan } from "react-icons/tb";
import { HiOutlineFolderAdd } from "react-icons/hi";
import { FaFilter } from "react-icons/fa6";
import { MdMeetingRoom } from "react-icons/md";
import { BiSolidFileImport } from "react-icons/bi";

import DropDown from "./DropdownForMainSection";

const Msdf = ({ data }) => {
  //const DropdownArr = ["All Brands", "Desk", "Tags"];
  return (
    <div className="w-full mt-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-md shadow-md pl-2 cursor-pointer">
            <TbBrand4Chan />
            <DropDown
              itemName="All Brands"
              data={data ? data.map((item) => item.BrandName) : []}
            />
          </div>
          <div className="rounded-md shadow-md cursor-pointer">
            <DropDown
              itemName="Desk"
              //   data={data ? data.map((item) => item.BrandName) : []}
            />
          </div>
          <div className="rounded-md shadow-md">
            <DropDown
              itemName="Tags"
              //   data={data ? data.map((item) => item.Tags) : []}
            />
          </div>
          <div className="flex items-center rounded-md shadow-md p-2 gap-2 cursor-pointer">
            <HiOutlineFolderAdd />
            <h4>Sort</h4>
          </div>
          <div className="flex items-center rounded-md shadow-md p-2 gap-2 cursor-pointer">
            <FaFilter />
            Filter
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-md shadow-md p-2 gap-2 cursor-pointer">
            <MdMeetingRoom />
            Meeting
          </div>
          <div className="flex items-center rounded-md shadow-md p-2 gap-2 cursor-pointer">
            <BiSolidFileImport />
            Import/Export
          </div>
        </div>
      </div>
    </div>
  );
};

export default Msdf;
