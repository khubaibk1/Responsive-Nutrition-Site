"use client";
import React, { useState } from "react";

const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav className="w-full h-[130px] ">
      <div className="w-full h-[50px]  text-[10px] font-[400] flex justify-center py-[16px] sm:text-[16px] ">
        Join the waitlist 🚨 Personalized Protein & Fiber Powder Supplements
        coming soon →
      </div>

      <div className="h-[80px] flex flex-row items-center sm:justify-around justify-between bg-[#146356] text-white">
        <div className="text-[20px] sm:text-[40px] font-[800] sm:ml-[0] ml-[10px] ">
          Logo
        </div>

        <div className="block sm:hidden sm:mr-[0] text-[20px] mr-[10px]">
          <button onClick={toggleMobileNav}>
            {isMobileNavOpen ? <span>X</span> : <span>☰</span>}
          </button>
        </div>

        <div className="hidden sm:flex  ">
          <ul className="flex flex-row text-[6px] sm:text-[16px] font-[400] justify-around sm:w-[753px] pl-[70px] w-[100px] items-center mr-[30px]">
            <li>DNA Nutrition Analysis</li>
            <li>Personalized Vitamins & Supplements</li>
            <li>Dietitian</li>
            <li>Our Science</li>
          </ul>

          <div>
            <button className="btn">Log In</button>
            <button className="btn bg-[#FF7F3F] ml-[18px] border-[#FF7F3F]">
              Register
            </button>
          </div>
        </div>
      </div>

      {isMobileNavOpen && (
        <div className="sm:hidden fixed   left-0 right-0 h-[210px] z-50 bg-[#146356]">
          <div className="sm:hidden h-[150px]">
            <ul className=" text-white p-4 text-[12px]">
              <li>DNA Nutrition Analysis</li>
              <li>Personalized Vitamins & Supplements</li>
              <li>Dietitian</li>
              <li>Our Science</li>
            </ul>
            <div className="text-center p-4">
              <button className="btn  bg-[#FF7F3F] ml-[18px] border-[#FF7F3F]">
                Log In
              </button>
              <button className="btn bg-[#FF7F3F] ml-[18px] border-[#FF7F3F]">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
