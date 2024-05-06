import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import logo from "../images/WhatsApp Image 2024-05-01 at 20.55.03_c1f822d9.jpg";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center mx-10 md:h-[200px]">
        <img src={logo} alt="Company Logo" className="rounded-2xl mt-3" />
      </div>
      <div className="navbar bg-[#322C2B] mx-auto max-w-6xl rounded-xl mt-10">
        <div className="flex-1">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
              <li>
                <Link to="hero" spy={true} smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="products" spy={true} smooth={true} duration={500}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true} duration={500}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar pl-10 hidden lg:flex text-white">
          <ul className="menu menu-horizontal p-0">
            <li className="text-2xl font-bold">
              <Link to="hero" spy={true} smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="text-2xl font-bold">
              <Link to="products" spy={true} smooth={true} duration={500}>
                Products
              </Link>
            </li>
            <li className="text-2xl font-bold">
              <Link to="about" spy={true} smooth={true} duration={500}>
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            className="btn"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
