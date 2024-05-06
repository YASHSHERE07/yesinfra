import React from "react";
import wlogo from "../images/wlogo.png";

const EnquiryModal = ({ product, onClose }) => {
  if (!product) return null; // Prevents the modal from rendering if no product is set
  const phoneNumber = "+1234567890";
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center m">
      <div className="bg-white p-5 rounded-lg m-3">
        <h2 className=" pb-3 font-bold">{`Enquiry for ${product.name}`}</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full"
          ></textarea>
          <button type="submit" className="btn">
            Send Enquiry
          </button>
        </form>
        <div className="divider">OR</div>
        <div className="flex justify-center mt-4 md:mt-6">
        
          <div className="ml-4 text-center md:text-left">
            <h1 className="text-xl md:text-2xl text-gray-900 font-bold mt-7">
              Contact us on Whatsapp
            </h1>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-4 text-xl"
            >
              <button>Send Msg via Whatsapp</button>
            </a>
          </div>
        </div>
        <button className="btn btn-error mt-4" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EnquiryModal;
