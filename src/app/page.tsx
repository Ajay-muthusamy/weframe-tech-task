import React from "react";
import Sidebar from "./Components/sidebar";
import Navbar from "./Components/navbar";
const page = () => {
  return (
    <div className="bg-gray-100 flex ">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default page;
