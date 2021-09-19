import React from "react";

function Footer() {
  return (
    <>
      <footer className="flex justify-between px-5 pt-5 pb-20 mt-10 w-full h-20 bg-black ">
        {/* left */}
        <div className="bg-white flex">
          <p className="text-white text-2xl mb-1 mr-3">Join the Newsletter</p>
          <form>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-3 py-1 rounded-2xl focus:outline-none"
            />
            <button className="animate-pulse bg-transparent mx-5 px-5 py-1 border border-white text-white">
              Join
            </button>
          </form>
        </div>
        {/* right */}
        <div>
          <p className="text-white text-base line-through">
            copyright &copy; Cats 2021-Infinity
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
