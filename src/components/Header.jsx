import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const { user } = useAuth();

  return (
    <div className="bg-blue-500">
      <div className="max-w-[1440px] m-auto h-[70px] flex items-center justify-between p-4">
        <h1 className="text-2xl cursor-pointer text-white font-bold">
          Learning Space Pro
        </h1>

        {!toggle ? (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-3xl md:hidden block"
          />
        ) : (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-3xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex gap-1 p-1 cursor-pointer text-white font-semibold">
          <li className="h-full p-3 hover:bg-slate-50/10 ">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="h-full p-3 hover:bg-slate-50/10 ">
            <NavLink to={"/course"}>Course</NavLink>
          </li>
          <li className="h-full p-3 hover:bg-slate-50/10 ">
            <NavLink to={"/pricing"}>Pricing</NavLink>
          </li>
          <li className="h-full p-3 hover:bg-slate-50/10 ">
            <NavLink to={"/about"}>About</NavLink>
          </li>

          {!user.username && (
            <li className="ml-5 h-full p-3 hover:bg-slate-50/10 ">
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          )}

          {!user.username && (
            <li className="h-full p-3 bg-white text-blue-500 rounded-md hover:bg-slate-50/10  hover:text-white">
              <NavLink to={"/register"}>Register</NavLink>
            </li>
          )}
        </ul>
        <ul
          className={`duration-300 md:hidden w-full shadow-lg text-black rounded-b-lg font-semibold fixed bg-white top-[68px] ${
            toggle ? "left-[0]" : "left-[-100%] "
          }`}
        >
          <li className="p-5 hover:bg-blue-50 ">Home</li>
          <li className="p-5 hover:bg-blue-50 ">Course</li>
          <li className="p-5 hover:bg-blue-50">Pricing</li>
          <li className="p-5 hover:bg-blue-50">Blog</li>
          <li className="p-5 hover:bg-blue-50">About</li>
          <li className="p-5 hover:bg-blue-50">Contact</li>

          <li className="p-5 hover:bg-blue-50 mt-5">Login</li>
          <li className="p-5 hover:bg-blue-50">Register</li>
        </ul>
      </div>
    </div>
  );
}
