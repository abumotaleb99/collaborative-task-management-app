import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  WrenchScrewdriverIcon,
  ChevronUpIcon,
  UsersIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  const [isExpandedCategories, setIsExpandedCategories] = useState(false);
  const [isExpandedProducts, setIsExpandedProducts] = useState(false);
  const [isExpandedUsers, setIsExpandedUsers] = useState(false);

  const toggleCategories = () => {
    setIsExpandedCategories(!isExpandedCategories);
    setIsExpandedProducts(false); // Close other menus
    setIsExpanded3(false);
  };

  const toggleProducts = () => {
    setIsExpandedProducts(!isExpandedProducts);
    setIsExpandedCategories(false); // Close other menus
    setIsExpanded3(false);
  };

  const toggleUsers = () => {
    setIsExpandedUsers(!isExpandedUsers);
    setIsExpandedCategories(false); // Close other menus
    setIsExpandedProducts(false);
  };

  return (
    <div className="w-80 h-screen overflow-y-auto border hidden lg:block">
      <h2 className="text-sm font-semibold px-6 py-[12.7px]">
        Task Management App
      </h2>

      {/* Sidebar Menu */}
      <ul>
        {/* Dashboard */}
        <li>
          <Link
            to="/"
            className={`flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none`}
          >
            <HomeIcon className="mr-4 h-4 w-4 text-gray-400 transition-transform duration-300 rotate-0" />
            <span>Dashboard</span>
          </Link>
        </li>

        {/* Categories */}
        <li
          className={`relative ${isExpandedCategories ? "transition-all" : ""}`}
        >
          <a
            className={`flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none`}
            onClick={toggleCategories}
          >
            <WrenchScrewdriverIcon className="mr-4 h-4 w-4 text-gray-400 transition-transform duration-300 rotate-0" />
            <span>Categories</span>
            <ChevronUpIcon
              className={`ml-auto h-4 w-4 text-gray-400 transition-transform duration-300 ${
                isExpandedCategories ? "rotate-0" : "rotate-180"
              }`}
            />
          </a>
          {isExpandedCategories && (
            <ul className={`relative m-0 list-none p-0`}>
              <li className="relative">
                <Link
                  to="add-category"
                  className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none"
                >
                  Add Category
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="manage-categories"
                  className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none"
                >
                  Manage Categories
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Products */}
        <li
          className={`relative ${isExpandedProducts ? "transition-all" : ""}`}
        >
          <a
            className={`flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none`}
            onClick={toggleProducts}
          >
            <WrenchScrewdriverIcon className="mr-4 h-4 w-4 text-gray-400 transition-transform duration-300 rotate-0" />
            <span>Products</span>
            <ChevronUpIcon
              className={`ml-auto h-4 w-4 text-gray-400 transition-transform duration-300 ${
                isExpandedProducts ? "rotate-0" : "rotate-180"
              }`}
            />
          </a>
          {isExpandedProducts && (
            <ul className={`relative m-0 list-none p-0`}>
              <li className="relative">
                <Link
                  to=""
                  className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none"
                >
                  Add Product
                </Link>
              </li>
              <li className="relative">
                <Link
                  to=""
                  className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none"
                >
                  Manage Products
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Users */}
        <li className={`relative ${isExpandedUsers ? "transition-all" : ""}`}>
          <a
            className={`flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none`}
            onClick={toggleUsers}
          >
            <UsersIcon className="mr-4 h-4 w-4 text-gray-400 transition-transform duration-300 rotate-0" />
            <span>Users</span>
            <ChevronUpIcon
              className={`ml-auto h-4 w-4 text-gray-400 transition-transform duration-300 ${
                isExpandedUsers ? "rotate-0" : "rotate-180"
              }`}
            />
          </a>
          {isExpandedUsers && (
            <ul className={`relative m-0 list-none p-0`}>
              <li className="relative">
                <Link
                  to=""
                  className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none"
                >
                  Add User
                </Link>
              </li>
              <li className="relative">
                <Link
                  to=""
                  className="flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none"
                >
                  Manage Users
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Settings */}
        <li>
          <Link
            to="/"
            className={`flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none`}
          >
            <Cog8ToothIcon className="mr-4 h-4 w-4 text-gray-400 transition-transform duration-300 rotate-0" />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
