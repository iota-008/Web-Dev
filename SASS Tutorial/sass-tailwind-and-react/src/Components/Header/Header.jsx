import React from "react";
import logo from "../../Images/amazon_logo.png";
import "./index.css";
import locationIcon from "../../Images/location.svg";
import searchIcon from "../../Images/search.svg";
// import menuIcon from "../../Images/menu.svg";
import "./script.js";
function Header() {
  return (
    <div className="md:flex md:flex-col">
      <div className="navbar navbar-default md:flex md:flex-row">
        {/* logo */}
        <img className="logo" src={logo} alt="logo" width="150" />
        {/* location*/}
        <div className="flex space-x-5  md:flex-col text-white mx-5 text-center text-sm">
          <span>Deliver to Ankit</span>
          <div className="flex md:flex-row ">
            <img src={locationIcon} alt="location icon" />
            <p>Nagpur 440013</p>
          </div>
        </div>
        {/* search bar */}
        <form className="search-bar shadow flex">
          <select
            id="search"
            className="bg-gray-400 rounded-tl-md rounded-bl-md w-auto h-full focus:outline-none p-1"
          >
            <option value="Deals">Deals</option>
            <option value="Alexa Skills">Alexa Skills</option>
            <option value="Books">Books</option>
            <option value="Beauty">Beauty</option>
          </select>
          <input
            type="text"
            className=" h-full w-96 drop-shadow-xl focus:outline-none p-1"
          />
          <button class="search-button rounded-tr-md rounded-br-md w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
            <img src={searchIcon} alt="search icon" />
          </button>
        </form>
      </div>
      {/* sidebar menu */}
      {/* mobile view */}
      <div class="relative min-h-screen md:flex">
        <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
          <a href="/#" class="block p-4 text-white font-bold">
            Amazon
          </a>

          <button class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* desktop view */}
        <div class="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
          <a href="/#" class="text-white flex items-center space-x-2 px-4">
            <svg
              class="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <span class="text-2xl font-extrabold">Better Dev</span>
          </a>

          <nav>
            <a
              href="/#"
              class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              Home
            </a>
            <a
              href="/"
              class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              About
            </a>
            <a
              href="/"
              class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              Features
            </a>
            <a
              href="/"
              class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            >
              Pricing
            </a>
          </nav>
        </div>

        <div class="flex-1 p-10 text-2xl font-bold">content goes here</div>
      </div>
    </div>
  );
}

export default Header;
