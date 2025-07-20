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
              className="mt-10"
            />
            <div className="flex items-center gap-2">
              <img
                src="/public/secondlogo.avif"
                alt="medswiss logo"
                width="372"
              />
            </div>
          </div>
          <div className="flex mr-20 ">
            <img src="/public/thirdlogo.png" alt="" width="222" />
            <img src="/public/forthlogo.avif" alt="" width="112" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-sm font-semibold  pb-[600px] ml-[350px] ">
          <button className=" px-8 py-2  text-green-800 hover:bg-white cursor-pointer border border-black text-[16px]">
            Home
          </button>
          <button className="bg-red-800 text-white px-10 py-1 hover:text-green-800 hover:bg-white cursor-pointer hover:border hover:border-black text-[16px] ">
            About Us
          </button>
          <button className="bg-red-800 text-white px-10 py-1  hover:text-green-800 hover:bg-white cursor-pointer hover:border hover:border-black text-[16px]">
            Skill Academy
          </button>
          <button className="bg-red-800 text-white px-10 py-1  hover:text-green-800 hover:bg-white cursor-pointer hover:border hover:border-black text-[16px]">
            Certificate Verification
          </button>
          <button className="bg-red-800 text-white px-10 py-1  hover:text-green-800 hover:bg-white cursor-pointer hover:border hover:border-black text-[16px]">
            Membership
          </button>
          <button className="bg-red-800 text-white px-10 py-1  hover:text-green-800 hover:bg-white cursor-pointer hover:border hover:border-black text-[16px]">
            Contact Us
          </button>
        </div>
      </nav>
      <div className="ml-[120px] bg-slate-100">
        <img src="/public/logo.avif" alt="" width="1284" />
      </div>
    </>
  );
};

export default Navbar;
