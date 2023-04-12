import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-orange-500">
      <div className="flex justify-center w-11/12 max-w-[1200px] items-center text-white mx-auto">
        <NavLink to={"/"}>
          <div className="flex items-center font-semibold">
            <img src={logo} className="w-20" />
            <span className="-translate-x-2 uppercase">GYM Guide</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
