import React from "react";

import ContactUs from "./ContactUs";
import MainContent from "./MainContent";

const AboutUs = () => {
  return (
    <>
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl  my-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className=" h-[700px] col-span-1 md:col-span-2 rounded-xl bg-[#6C3428] p-4 md:p-8 text-white">
              <h2 className="text-xl md:text-2xl font-bold">Get in Touch</h2>
              <p className="pb-4 md:pb-10">
                Please fill out the form on this page to request information
                about our services. We will respond as quickly as possible.
              </p>
              <MainContent />
            </div>
            <div className="col-span-1 md:col-span-3 flex justify-center items-start">
              <ContactUs />
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default AboutUs;
