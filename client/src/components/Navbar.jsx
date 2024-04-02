import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { user, logoutUser } = useContext(UserContext);

  const closeMenu = () => setMenu(false);

  return (
    <nav className="customNav top-0 sticky w-full z-50">
      <div className="h-[80px] p-5 md:px-20 w-full flex justify-between border-b-2 border-black items-center">
        <NavLink
          to="/"
          className="text-xl md:text-3xl font-bold text-black hover:text-red-900"
        >
          Face-api.js
        </NavLink>

        <div className="flex gap-10">
          <ul className="hidden md:flex font-medium gap-10 items-center">
            <NavLink to="/" className="text-black hover:text-red-600">Home</NavLink>
            {!user ? (
              <NavLink to="/login" className="text-white hover:text-red-600">Login</NavLink>
            ) : (
              <button
                className="bg-red-500 w-[70px] p-3 rounded-lg text-white"
                onClick={logoutUser}
              >
                Logout
              </button>
            )}
          </ul>


        </div>

        <div className="flex items-center gap-5 text-black md:hidden">
          <div className="flex md:hidden items-center justify-center">
            <a href="#">
              <FaGithub className="text-black" size={34} />
            </a>
          </div>
          {menu ? (
            <RxCross1
              className="cursor-pointer"
              onClick={() => setMenu((prev) => !prev)}
              size={25}
            />
          ) : (
            <AiOutlineMenu
              className="cursor-pointer"
              onClick={() => setMenu((prev) => !prev)}
              size={25}
            />
          )}
        </div>
      </div>
      <div
        className={`h-screen menu absolute bg-black w-full transition-all duration-200 ease-in-out ${menu ? "" : "mt-[-500%]"
          }`}
      >
        <ul className="flex flex-col text-white mt-10 font-medium gap-10 items-center">
          <NavLink
            onClick={() => {
              closeMenu();
              setMenu(false);
            }}
            to="/"
            className="text-white hover:text-red-600"
          >
            Home
          </NavLink>
          {!user ? (
            <NavLink
              onClick={closeMenu}
              to="/login"
              className="text-black hover:text-red-600"
            >
              Login
            </NavLink>

          ) : (

            //logout button
            <button
              className="bg-gray-900 hover:bg-red-700 transition duration-300 ease-in-out delay-100 w-[70px] p-3 rounded-lg text-black hover:text-white hover:shadow-lg"
              onClick={logoutUser}
            >
              Logout
            </button>


          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

