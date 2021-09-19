import React from "react";

function Features() {
  return (
    <div className="block md:flex flex-row ">
      <div className="m-5 md:w-full  rounded-lg bg-gray-900 text-center shadow-2xl border-solid border-2">
        <img
          src="https://images.unsplash.com/photo-1571988840298-3b5301d5109b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="h-full w-full rounded-lg shadow-2xl opacity-70 hover:opacity-100"
        />
        <p className="mt-3 text-xl font-bold ">Curious</p>
      </div>
      <div className="m-5 md:w-full  rounded-lg bg-gray-900 text-center shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1555078243-f044dcc0cd4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="h-full w-full rounded-lg shadow-2xl opacity-70 hover:opacity-100"
        />
        <p className="mt-3 text-xl font-bold ">Playing</p>
      </div>
      <div className="m-5 md:w-full  rounded-lg bg-gray-900 text-center shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="h-full w-full rounded-lg shadow-2xl opacity-70 hover:opacity-100"
        />
        <p className="mt-3 text-xl font-bold ">Sleeping</p>
      </div>
      <div className="m-5 md:w-full  rounded-lg bg-gray-900 text-center shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1597626133663-53df9633b799?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="h-full w-full rounded-lg shadow-2xl opacity-70 hover:opacity-100"
        />
        <p className="mt-3 text-xl font-bold ">Innocent</p>
      </div>
    </div>
  );
}

export default Features;
