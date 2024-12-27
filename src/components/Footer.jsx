import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm  ">
        <div>
          <img
            src={assets.logo}
            alt="logo"
            className="w-32 mb-5 cursor-pointer"
          />
          <p className="w-full md:w-2/3 text-gray-600">
            At Forever, we believe in creating timeless fashion pieces that
            speak to your unique style. Whether you’re looking for everyday
            essentials, standout occasion wear, or the latest trends, our
            curated collections are designed to inspire. Join us on a journey of
            fashion, quality, and sustainability.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2  ">
            <li className="text-gray-600">Home</li>
            <li className="text-gray-600">About Us</li>
            <li className="text-gray-600">Delivery</li>
            <li className="text-gray-600">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600 ">
            <li>Phone: +123456789</li>
            <a href="mailto:rajesh97266@gmail.com">
              <li>Email:rajesh97266@gmail.com</li>
            </a>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="text-center text-gray-500 text-sm py-5">
          &copy; {new Date().getFullYear()} Forever E-commerce. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
