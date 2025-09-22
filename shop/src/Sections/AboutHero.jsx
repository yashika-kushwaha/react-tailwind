import React from "react";
export default function AboutHeroAlt() {
  return (
    <section className="relative bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-28 text-center space-y-8">
        
        {/* Subheading */}
        <span className="text-yellow-500 font-semibold tracking-widest uppercase">
          Who We Are
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Redefining <span className="text-yellow-500">Style & Comfort</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our journey began with a simple idea: to bring premium quality shirts
          that combine elegance, durability, and timeless fashion. Every design
          reflects our passion for craftsmanship and attention to detail.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <button className="px-8 py-3 bg-black text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 transition">
            Discover More
          </button>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl "></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl"></div>
    </section>
  );
}
