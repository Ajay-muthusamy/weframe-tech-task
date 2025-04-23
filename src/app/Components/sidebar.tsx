"use client";
import React, { useState } from "react";
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

// icons for sidebar
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

  return (
    <div className="w-[280px] bg-white p-4 pt-24 h-full">
      {/* sidebar link(icon ,name) */}
      {sidebarLink.map((data, index) => {
        const isActive = selected === data.name;
        const Icon = data.icon;
        return (
          <div
            key={index}
            className={`w-[233px] h-[56px] rounded-md mb-1 cursor-pointer ${
              isActive ? "bg-blue-950" : "bg-transparent"
            }`}
            onClick={() => setSelected(data.name)}
          >
            <div className="flex items-center space-x-4 h-full px-4">
              <Icon size={24} color={isActive ? "#FFFFFF" : "#000000"} />
              <h1
                className={`text-sm ${isActive ? "text-white" : "text-black"}`}
              >
                {data.name}
              </h1>
            </div>
          </div>
        );
      })}
      {/* contact support container */}
      <div>
        <div className="w=[232px] h-[46px] bg-[#E8E9FF] rounded-md mt-8">
          <div className="flex items-center space-x-4 h-full px-4">
            <Headphones size={24} color="#000000FF" />
            <h1 >Contact Support</h1> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
