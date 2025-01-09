import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} alt="Logo" />

      <ul className="hidden sm:flex items-center gap-3">
        <li>
          <NavLink
            to="/"
            className="flex flex-col items-center gap-1"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid #4A5568" : "none", // apply underline only to active
            })}
          >
            <p>Home</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid #4A5568" : "none", // apply underline only to active
            })}
          >
            <p>Collection</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className="flex flex-col items-center gap-1"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid #4A5568" : "none", // apply underline only to active
            })}
          >
            <p>About</p>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className="flex flex-col items-center gap-1"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid #4A5568" : "none", // apply underline only to active
            })}
          >
            <p>Contact</p>
          </NavLink>
        </li>
      </ul>

      <div className="flex  items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer " alt="" />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer "
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Order</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {/* {" "} */}
            10
          </p>
        </Link>
        <img src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden md:hidden" alt="" />

      </div>
    </div>
  );
};

export default Navbar;
