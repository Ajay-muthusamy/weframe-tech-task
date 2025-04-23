"use client";
import React, { useState } from "react";
import { AlignJustify } from "@deemlol/next-icons";
import { X } from "@deemlol/next-icons";

import {
  House,
  Codepen,
  Users,
  Table,
  Code,
  Airplay,
  Edit3,
  AlarmClock,
  PlayCircle,
  Settings,
  Headphones,
} from "@deemlol/next-icons";

interface SidebarItem {
  icon: React.ElementType;
  name: string;
}

const sidebarLink: SidebarItem[] = [
  { icon: House, name: "Dashboard" },
  { icon: Codepen, name: "Content" },
  { icon: Users, name: "User" },
  { icon: Table, name: "Task" },
  { icon: Code, name: "App/web" },
  { icon: Airplay, name: "Media" },
  { icon: Edit3, name: "Customize" },
  { icon: AlarmClock, name: "Notifications" },
  { icon: PlayCircle, name: "Subscription" },
  { icon: Settings, name: "Setting" },
];

const Sidebar: React.FC = () => {
  const [selected, setSelected] = useState<string>("Dashboard");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50 flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded">
          {isOpen ? (
            <X size={24} color="#000000FF" />
          ) : (
            <AlignJustify size={24} color="#000000FF" />
          )}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 z-40 h-full bg-white p-4 transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:w-[280px] md:block`}
      >
        <div className="absolute inset-0 rounded-full border-4 border-transparent animate-rotate border-gradient" />

        <div className="flex justify-center mb-5 mt-7 border-4 border-transparent ">
          <h1 className="text-2xl font-bold text-blue-950">WEFRAME TECH</h1>
        </div>

        {/* Sidebar items */}
        {sidebarLink.map((data, index) => {
          const isActive = selected === data.name;
          const Icon = data.icon;
          return (
            <div
              key={index}
              className={`w-[233px] h-[56px] rounded-md mb-1 cursor-pointer ${
                isActive ? "bg-blue-950" : "bg-transparent"
              }`}
              onClick={() => {
                setSelected(data.name);
                if (window.innerWidth < 768) setIsOpen(false);
              }}
            >
              <div className="flex items-center space-x-4 h-full px-4">
                <Icon size={24} color={isActive ? "#FFFFFF" : "#000000"} />
                <h1
                  className={`text-sm ${
                    isActive ? "text-white" : "text-black"
                  }`}
                >
                  {data.name}
                </h1>
              </div>
            </div>
          );
        })}

        {/* Contact Support */}
        <div>
          <div className="w-[232px] h-[46px] bg-[#E8E9FF] rounded-md mt-8">
            <div className="flex items-center space-x-4 h-full px-4">
              <Headphones size={24} color="#000000FF" />
              <h1>Contact Support</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
