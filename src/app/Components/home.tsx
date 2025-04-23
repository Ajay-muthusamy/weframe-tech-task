import React from "react";
import { Calendar, Search, Menu } from "@deemlol/next-icons";
import Homescreen from "./homescreen";

const Home = () => {
  return (
    <>
      <div className="p-4 bg-white m-[20px] rounded-md">
        <div className="flex justify-end gap-3 items-center">
          {/* Search Input Container */}
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Search size={20} color="#9CA3AF" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-[350px] h-[50px] pl-12 pr-4 rounded-md bg-gray-100 text-sm border-2 border-gray-400
            shadow-md"
            />
          </div>

          <div className="flex gap-3">
            {/* Calendar Icon */}
            <div className="w-[54px] h-[54px] flex items-center justify-center rounded-md bg-gray-200">
              <Calendar size={24} color="#000000FF" />
            </div>

            {/* Menu Icon */}
            <div className="w-[54px] h-[54px] flex items-center justify-center rounded-md bg-gray-200">
              <Menu size={24} color="#000000FF" />
            </div>

            {/* Add New Story Button */}
            <div>
              <button className="w-[160px] h-[54px] font-medium bg-blue-950 rounded-md text-white ms-1">
                Add New Story
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Homescreen />
      </div>
    </>
  );
};

export default Home;
