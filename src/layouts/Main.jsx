import React from "react";
import Sidebar from "../pages/Shared/Sidebar";
import Header from "../pages/Shared/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="w-full md:max-w-7xl mx-auto flex">
      <Sidebar></Sidebar>
      <div className="w-full">
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
