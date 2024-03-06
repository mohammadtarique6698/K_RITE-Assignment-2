/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../../public/images/logo.jpg";
import { RiTeamFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { MdDeveloperMode } from "react-icons/md";
import { IoBagAddOutline } from "react-icons/io5";
import { HiOutlineUserAdd } from "react-icons/hi";
import { IoIosHelpCircleOutline } from "react-icons/io";

import DropDown from "./Dropdown.jsx";

const Sidebar = () => {
  const name = "Innovative Hub";
  const avatar = name.split(" ")[0].charAt(0) + name.split(" ")[1].charAt(0);

  const dropdownArr = ["Products", "Sales", "Design"];

  return (
    <div className="w-full h-full border rounded-md shadow-md p-3">
      <div className="grid grid-cols-12 gap-2 border rounded-md shadow-md p-3">
        <div className="col-span-9">
          <div className="flex flex-row items-center gap-2">
            <img src={Logo} alt="logo" className="w-10 h-10 rounded-md" />

            <div className="flex flex-col">
              <h1>INH</h1>
              <h1 className="font-bold">Innovative Hub</h1>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
              <span className="text-sm font-bold">{avatar}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5 flex flex-col">
        <div className="flex flex-col border rounded-md shadow-md">
          <div className="flex flex-row items-center justify-between px-2 py-3">
            <div className="flex flex-row justify-start items-center gap-2">
              <RiTeamFill />
              <h4>Design Team</h4>
            </div>
            <div className="flex flex-row items-center justify-center bg-slate-100 shadow-md p-1 rounded-md">
              <FaXTwitter /> + 1
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-1 border rounded-md shadow-md">
          <div className="flex flex-row items-center justify-between px-2 py-3">
            <div className="flex flex-row justify-start items-center gap-2">
              <GrAnnounce />
              <h4>Maintenance Team</h4>
            </div>
            <div className="flex flex-row items-center justify-center bg-slate-100 shadow-md p-1 rounded-md">
              <FaXTwitter /> + 2
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-1 border rounded-md shadow-md">
          <div className="flex flex-row items-center justify-between px-2 py-3">
            <div className="flex flex-row justify-start items-center gap-2">
              <MdDeveloperMode />
              <h4>Developer Team</h4>
            </div>
            <div className="flex flex-row items-center justify-center bg-slate-100 shadow-md p-1 rounded-md">
              <FaXTwitter /> + 3
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-1 border rounded-md shadow-md">
          <div className="flex flex-row items-center justify-between px-2 py-3">
            <div className="flex flex-row justify-start items-center gap-2">
              <IoBagAddOutline />
              <h4 className="text-black/50">Create a Team</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-7 flex flex-col">
        <div className="flex flex-row justify-between items-center border rounded-md shadow-md px-2 py-2">
          <h4 className="text-black/50">FOLDERS</h4>
          <h4 className="text-black/50">+</h4>
        </div>
      </div>

      <div className="mt-5 border rounded-md shadow-md pb-5">
        {dropdownArr.map((item, index) => (
          <div key={index} className="border rounded-md shadow-md mt-2 mx-2">
            <DropDown item={item} />
          </div>
        ))}
        <div className="border rounded-md shadow-md mt-2 mx-2 px-4 p-2">
          <div className="flex items-center gap-2">
            <IoBagAddOutline />
            <h4>Office</h4>
          </div>
        </div>
        <div className="border rounded-md shadow-md mt-2 mx-2 px-4 p-2">
          <div className="flex items-center gap-2">
            <IoBagAddOutline />
            <h4>Legal</h4>
          </div>
        </div>
      </div>

      <div className="px-2 mt-48">
        <div className="flex items-center gap-2 border rounded-md shadow-md p-2">
          <HiOutlineUserAdd />
          <h4>Invite Teammates</h4>
        </div>

        <div className="mt-2 flex items-center gap-2 border rounded-md shadow-md p-2">
          <IoIosHelpCircleOutline />
          <h4>Help and first Steps</h4>
        </div>

        <div className="mt-2 flex items-center gap-2 justify-between">
          <div className="border rounded-md shadow-md p-2">
            7 days left on Trial
          </div>
          <button className="p-2 bg-black text-white rounded-md">
            Add Billing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
