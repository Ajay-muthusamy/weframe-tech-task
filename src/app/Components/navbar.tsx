import React from "react";
import { ArrowLeft } from "@deemlol/next-icons";
import Image from "next/image";
import profileImage from "../../../public/assests/image.png";
import { ChevronDown } from "@deemlol/next-icons";
import Home from "../Components/home";
const Navbar = () => {
  return (
    <>
      <div>
        <div className="bg-white flex justify-between items-center  p-4 shadow-sm ">
          <div className="flex gap-2 items-center">
            <div className="hidden md:block">
              <ArrowLeft size={24} color="#000000FF" />
              <h1 className="text-lg font-medium">Stories</h1>
            </div>
          </div>

          <div className="md:w-[297px] md:h-[53px] gap-2 bg-gray-50 border-2 border-gray-200 rounded-md flex items-center md:gap-4 px-3">
            <Image
              src={profileImage}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex justify-between w-full">
              <div>
                <h2 className="text-sm text-gray-500">Welcome back,</h2>
                <h1 className="font-medium text-gray-800">Akshita Patel</h1>
              </div>
              <div className="mt-2">
                <ChevronDown size={24} color="#000000FF" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Home />
        </div>
      </div>
    </>
  );
};

export default Navbar;
