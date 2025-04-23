"use client";
import React, { useState } from "react";
import Image from "next/image";
import { list } from "../../../public/assests/response";
import threedot from "../../../public/three-dots-line-svgrepo-com.svg";
import { Eye } from "@deemlol/next-icons";
import { Trello } from "@deemlol/next-icons";

// Filter buttons
const options: { optionName: string; count: number }[] = [
  { optionName: "All", count: 4500 },
  { optionName: "Draft", count: 1203 },
  { optionName: "Pending", count: 890 },
  { optionName: "Published", count: 2432 },
  { optionName: "Archived", count: 320 },
];

// Function to determine background color based on status
const getBgColor = (status: string) => {
  const lower = status.toLowerCase();
  if (lower === "published") return "#E4FFF8";
  if (lower === "create") return "#DAF1FB";
  return "#F4F4F4";
};

const getTextColor = (status: string) => {
  const lower = status.toLowerCase();
  if (lower === "published") return "#0DAD82";
  if (lower === "create") return "#58A4FF";
  return "#A0A3BD";
};

const HomeScreen = () => {
  const [selected, setSelected] = useState<string>('All');

  return (
    <div className="p-4">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 md:gap-4 text-center">
        {options.map((data, index) => {
          const isActive = selected === data.optionName;
          return (
            <div key={index}>
              <div
                className={`w-[80px] h-[40px] md:w-[119px] md:h-[54px] rounded-md ${
                  isActive ? "bg-blue-950 text-white" : "bg-gray-200 text-black"
                } flex items-center justify-center transition-all cursor-pointer text-medium`}
                onClick={() => setSelected(data.optionName)}
              >
                <h1 className="text-sm font-medium">
                  {data.optionName} ({data.count})
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-4 mt-5 justify-center">
        {list.map((data, index) => {
          return (
            <div key={index} className="w-[280px] h-[400px]">
              <div
                className="w-full h-full bg-cover bg-center rounded-lg relative overflow-hidden p-2"
                style={{ backgroundImage: `url(${data.image.src})` }}
              >
                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 w-full h-[90%] bg-gradient-to-t from-black via-black/60 to-transparent z-0" />

                {/* Foreground content */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  {/* Top icons */}
                  <div className="flex justify-end gap-3">
                    <div className="w-[62px] h-[36px] p-1 bg-white rounded-md flex justify-center items-center gap-1">
                      <Eye size={19} color="#1C1442" />
                      <h1 className="text-xs">{data.views}</h1>
                    </div>
                    <div className="p-2 bg-white rounded-md w-[40px] flex items-center justify-center">
                      <Trello size={19} color="#1C1442" />
                    </div>
                  </div>

                  {/* Bottom description */}
                  <div>
                    <h1 className="text-white text-[20px] font-semibold pb-2">
                      {data.desc}
                    </h1>
                    <div className="flex gap items-center justify-between">
                      <div className="flex">
                        <h1 className="text-white font-bold text-sm">
                          {data.type} •
                        </h1>
                        <h1 className="text-[#A0A3BD] text-sm ml-1">
                          {data.data}
                        </h1>
                      </div>

                      <div
                        className="w-[98px] h-[40px] rounded-md flex items-center justify-center"
                        style={{ backgroundColor: getBgColor(data.status) }}
                      >
                        <h1
                          className="text-center text-black text-sm capitalize"
                          style={{ color: getTextColor(data.status) }}
                        >
                          {data.status}
                        </h1>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-center items-center gap-2">
                        <div>
                          <button className="w-[192px] h-[50px] mt-3 rounded-md bg-[#E8E9FF]">
                            View
                          </button>
                        </div>
                        <div>
                          <div className="text-white w-[59px] h-[50px] bg-white rounded-md flex justify-center mt-3">
                          <Image src={threedot} alt="My Icon" width={35} height={35} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
