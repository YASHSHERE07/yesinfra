import React from "react";

const Hero = () => {
  const phoneNumber = "+1234567890"; // Replace with your business phone number
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="w-full md:flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            Interior Design
          </h1>
          <p className="mt-3 text-lg md:text-xl lg:text-2xl text-gray-600">
            Step into a world where the art of Interior Design is meticulously
            crafted to bring together timeless elegance and cutting-edge
            modernity.
          </p>
          <p className="mt-3 text-lg md:text-xl lg:text-2xl text-gray-600">
            Innovation, allowing you to transform your living spaces into the
            epitome of luxury and sophistication.
          </p>

          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md  px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-4"
          >
            <button className="mt-5 md:mt-8 bg-[#222831] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg text-lg md:text-xl transition-colors">
              Start Project
            </button>
          </a>
        </div>
        <div className="w-full md:flex-1">
          <img
            src="https://source.unsplash.com/random/800x600?interior"
            alt="Interior Design"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
      <div className="mt-6  p-4 text-white sm:w-[450px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          <div className="stat shadow p-4 rounded bg-[#AF8260]">
            <div className="stat-value text-2xl lg:text-3xl">400+</div>
            <div className="stat-desc text-white text-lg lg:text-xl">
              Project Completed
            </div>
          </div>
          <div className="stat shadow p-4 rounded bg-[#AF8260]">
            <div className="stat-value text-2xl lg:text-3xl">600+</div>
            <div className="stat-desc text-white text-lg lg:text-xl">
              Satisfied Clients
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
