import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-[300px] px-4 py-2  bg-white shadow-md gap-2 ">
        <div className="flex justify-between items-center">
          <div className="flex ml-16 mb-16">
            <img
              src="/public/firstlogo.avif"
              alt=""
              width="95"
              height="118"
              className="mt-10"
            />
            <div className="flex items-center gap-2">
              <img
                src="/public/secondlogo.avif"
                alt="medswiss logo"
                width="372"
                height="99"
              />
            </div>
          </div>
          <div className="flex mr-20">
            <img src="/public/thirdlogo.png" alt="" width="222" height="51" />
            <img src="/public/forthlogo.avif" alt="" width="112" height="40" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-sm font-semibold  mb-[100px] ml-56">
          <button className=" px-8 py-2  text-green-800 hover:bg-white cursor-pointer border border-black">
            Home
          </button>
          <button className="bg-red-800 text-white px-10 py-1 hover:text-green-800 hover:bg-white cursor-pointer hover:border hover:border-black">
            About Us
          </button>
          <button className="bg-red-800 text-white px-10 py-1  hover:text-green-800 hover:bg-white cursor-pointer hover:border hover:border-black">
            Skill Academy
          </button>
          <button className="bg-red-800 text-white px-10 py-1  hover:text-green-800 hover:bg-white cursor-pointer hover:border hover:border-black">
            Certificate Verification
          </button>
          <button className="bg-red-800 text-white px-10 py-1  hover:text-green-800 hover:bg-white cursor-pointer hover:border hover:border-black">
            Membership
          </button>
          <button className="bg-red-800 text-white px-10 py-1  hover:text-green-800 hover:bg-white cursor-pointer hover:border hover:border-black">
            Contact Us
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
