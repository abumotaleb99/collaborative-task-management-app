import React, { useState } from "react";
import user from "../../assets/images/user.jpg";
import {
  HomeIcon,
  WrenchScrewdriverIcon,
  ChevronUpIcon,
  UsersIcon,
  Cog8ToothIcon,
  Bars3CenterLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const [isExpandedCategories, setIsExpandedCategories] = useState(false);
  const [isExpandedProducts, setIsExpandedProducts] = useState(false);
  const [isExpandedUsers, setIsExpandedUsers] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

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
    <div className="flex justify-between items-center px-2 py-1 border border-b-2">
      {/* Mobile Navbar */}
      <div className="lg:hidden">
        {/* Dropdown Open Button */}
        <button title="Open Menu" onClick={() => setIsMenuOpen(true)}>
          <Bars3CenterLeftIcon className="w-7 text-gray-600" />
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-80 h-screen bg-white z-10 overflow-y-auto border">
            <div className="flex justify-between items-center px-6">
              <h2 className="text-sm font-semibold  py-[12.7px]">
                Task Management App
              </h2>
              {/* Dropdown Close Button */}
              <button
                aria-label="Close Menu"
                title="Close Menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <XMarkIcon className="w-7 text-gray-600" />
              </button>
            </div>

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
                className={`relative ${
                  isExpandedCategories ? "transition-all" : ""
                }`}
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
                className={`relative ${
                  isExpandedProducts ? "transition-all" : ""
                }`}
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
              <li
                className={`relative ${
                  isExpandedUsers ? "transition-all" : ""
                }`}
              >
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
        )}
      </div>

      <span></span>
      {/*  This empty span is just for to maintain the position of User Profile div */}
      {/* User Profile */}
      <div className="relative">
        <button onClick={toggleProfileMenu}>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={user} alt="User" className="w-full h-full object-cover" />
          </div>
        </button>
        {/* Profile Menu */}
        {isProfileMenuOpen && (
          <div className="absolute top-12 right-0 mt-2 bg-white shadow-md rounded-md">
            <ul>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Profile
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
