import React from "react";
export default function ProductHero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Elevate Your Style <br />
            <span className="text-yellow-400">with Premium Shirts</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-md">
            Discover our exclusive collection of premium shirts, crafted for comfort, elegance, and timeless style.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-lg hover:bg-yellow-300 transition">
              Shop Now
            </button>
            <button className="px-6 py-3 border border-gray-400 text-gray-200 rounded-xl hover:bg-gray-800 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <img
            src="/public/images/Premium_Shirt.png"
            alt="Premium Shirt"
            className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
          />
          <div className="absolute -z-10 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full top-10 right-10"></div>
        </div>
      </div>
    </section>
  );
}
