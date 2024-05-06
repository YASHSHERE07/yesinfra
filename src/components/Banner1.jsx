import React from "react";
import logo from "../images/WhatsApp Image 2024-05-01 at 20.55.02_cfc0a9a5.jpg";

const Banner1 = () => {
  return (
    <div className="flex flex-col md:flex-row w-full overflow-hidden">
      <div className="flex flex-1 flex-col md:flex-row items-center bg-white p-4">
        <img
          src={logo}
          alt="Left Image"
          className="w-full md:w-[300px] md:h-48 object-cover mr-4"
        />
        <div className="text-center md:text-left">
          <p className="text-lg md:text-4xl font-bold text-[#76453B]">
            Discover Design Inspiration: Your Home's Transformation Starts Here
          </p>
        </div>
      </div>
      <div className="flex-1 relative">
        <img
          src="https://source.unsplash.com/random/800x600?interior"
          alt="Right Parallelogram Image"
          className="absolute inset-0 w-full h-full object-cover transform origin-top-right -skew-x-12"
        />
      </div>
    </div>
  );
};

export default Banner1;
