import React from "react";

function Hero() {
  return (
    <div className="md:grid grid-cols-2 gap-4 p-10  bg-blue-900">
      <div className="container p-5">
        <h2 className="text-2xl text-white mb-6">Welcome to cat city!!</h2>
        <p className="text-lg text-blue-400 my-6 leading-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum officiis
          dolore facere magni saepe odit ratione fuga ut eveniet. Delectus
          accusantium vitae corrupti vel officia, sint enim quisquam. Hic
          quisquam magnam repellat porro modi a, maxime voluptatibus. Quibusdam,
          veritatis id suscipit adipisci sit similique modi impedit perspiciatis
          soluta quaerat dolorem!
        </p>
        <a href="/#" className="bg-transparent border p-2 m-2 text-white">
          Read More
        </a>

        <a
          href="/#"
          className="bg-transparent border p-2 m-2 text-white animate-pulse-fast"
        >
          Visit Site
        </a>
      </div>

      <div className="container p-5">
        <img
          src="https://images.unsplash.com/photo-1602924097911-a78ca1af38c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=718&q=80"
          alt="hero"
          className="w-full rounded-md shadow-2xl"
        />
      </div>
    </div>
  );
}

export default Hero;
