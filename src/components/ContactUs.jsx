import React, { useState } from "react";
import wlogo from "../images/wlogo.png";

function ContactUs() {
  const phoneNumber = "+1234567890"; // Replace with your business phone number
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    const mailtoLink = `mailto:info@yourdomain.com?subject=Contact Request from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div
      className="hero h-[700px] rounded-xl"
      style={{
        backgroundImage:
          "url(https://source.unsplash.com/random/800x600?interior)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
      <div className="w-full h-[600px] md:w-4/5 p-4 md:p-8 mx-auto ">
        <h1 className="font-bold text-2xl md:text-3xl pb-5 text-white">
          Enquiry Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="block w-full rounded-lg border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="block w-full rounded-lg border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="block w-full rounded-lg border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="block w-full rounded-lg border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
            rows="3"
            required
          ></textarea>
          <button
            type="submit"
            className="block w-full rounded-lg bg-blue-500 px-8 py-2 text-white hover:bg-blue-600"
          >
            Send
          </button>
        </form>
        <div className="divider text-xl md:text-2xl text-white font-bold pt-10">
          OR
        </div>
        <div className="flex justify-center mt-4 md:mt-6">
          <img
            src={wlogo}
            alt=""
            className="rounded-xl w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
          />
          <div className="ml-4 text-center md:text-left">
            <h1 className="text-xl md:text-2xl text-white font-bold mt-7">
              Contact us on Whatsapp
            </h1>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-4"
            >
              <button>Send Message</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
