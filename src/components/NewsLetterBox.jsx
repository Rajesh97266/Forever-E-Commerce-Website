import React from "react";

const NewsLetterBox = () => {

  const subscribeHandler = (e) => {
    e.preventDefault();
    console.log("Subscribed");
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now & get 20% Offers
      </p>
      <p className="text-gray-400 mt-3">
        Subscribe to our newsletter and get 20% off your first purchase
      </p>
      <form onSubmit={subscribeHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <button className="bg-black text-white px-10 py-4 text-xs">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
