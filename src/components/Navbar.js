import React, { useState } from "react";
import Close from "../img/icon-close.svg";
import Menu from "../img/ham-icon.png";
import { NavLink , Link } from "react-router-dom"
import Darkmode from "./Theme";






const Navbar = () => {


  const [menu, Setmenu] = useState(true);


  
  return (
    <div className="absolute top-0 z-50 flex drop-shadow-sm backdrop-blur-sm flex-col text-xl py-2 font-cairo h-auto md:h-16 items-center md:flex-row w-full text-white px-10">
      <h1 className="text-3xl w-full md:w-auto mb-2 cursor-pointer font-Ruqaa text-green-600">
        <Link to="/"> آيـات</Link>
      </h1>
      <ul
        
        className={
          menu
            ? "hidden md:flex md:mr-16 md:w-2/5 md:justify-evenly"
            : "flex flex-col md:flex-row md:mr-16 w-full md:w-2/5 justify-center md:justify-evenly"
        }
      >
        <NavLink to="/" end className="hover:bg-[#3d3d3d9d]  hover:text-green-500 w-full md:w-auto my-2 rounded px-4 py-3 duration-100">
         الرئيسية
        </NavLink>
        <NavLink to="/quran" className="hover:bg-[#3d3d3d9d] hover:text-green-500 w-full md:w-auto my-2 rounded px-4 py-3 duration-100">
          القران
        </NavLink>
        <NavLink to="/audioquran" className="hover:bg-[#3d3d3d9d] hover:text-green-500 w-full md:w-auto my-2 rounded px-4 py-3 duration-100">
           الإستماع
        </NavLink>
      </ul>
      <div className="items-center absolute left-4 top-2 select-none flex">
        <Darkmode/>
        <img
        alt=""
        className="md:hidden w-7 h-7 mx-4 cursor-pointer"
        onClick={() => {
          !menu?Setmenu(true):Setmenu(false)
        }}
        src={menu ? Menu : Close}
      ></img>
      </div>
    </div>
  );
};

export default Navbar;
