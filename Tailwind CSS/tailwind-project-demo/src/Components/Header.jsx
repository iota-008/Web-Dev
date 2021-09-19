import React from "react";

function Header() {
  return (
    <div className="bg-gray-500 p-2  md:flex justify-between items-center">
      {/* left side */}
      <div className="flex flex-col md:flex-row md:flex md:items-center">
        <img
          src="https://cdn3.iconfinder.com/data/icons/animals-105/150/icon_animal_cachorro-256.png"
          alt="Logo"
          width="50"
          className="mx-5 my-2"
        />
        <a
          href="/#"
          className="md:inline-block p-3 text-white hover:underline hover:text-yellow-500"
        >
          Home
        </a>
        <a
          href="/#"
          className="md:inline-block p-3 text-white hover:underline hover:text-yellow-500"
        >
          About
        </a>
      </div>

      {/* rigth side */}
      <div className="my-5 w-max flex flex-col md:mt-0 md:flex-row">
        <a
          href="/#"
          className="my-2 mx-3 bg-blue-700 text-white rounded-md p-2 transition ease-in duration-100 flex-shrink hover:bg-blue-900 hover:text-blue-500"
        >
          Login
        </a>
        <a
          href="/#"
          className="my-2 mx-3 bg-blue-700 text-white rounded-md p-2 transition ease-in duration-100 flex-shrink hover:bg-blue-900 hover:text-blue-500"
        >
          Signup
        </a>
      </div>
    </div>
  );
}

export default Header;
