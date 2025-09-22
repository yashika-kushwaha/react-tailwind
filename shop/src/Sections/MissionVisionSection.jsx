import React from "react";
export default function MissionVisionSection() {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-gray-600">
            Our mission is simple — to craft shirts that redefine fashion while
            offering unmatched comfort. We aim to inspire confidence in every
            individual by combining premium fabrics, timeless designs, and
            modern tailoring.
          </p>
          <p className="text-lg text-gray-600">
            Our vision is to become a global symbol of quality and elegance.
            With every collection, we want to create fashion that is not only
            stylish but also sustainable for the future.
          </p>
          <button className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-xl shadow-md hover:bg-yellow-400 
              transition">
            Explore Collection
          </button>
        </div>
        {/* Right Image */}
        <div className="relative">
          <img
            src="/public/images/Mission.png"
            alt="Mission and Vision"
            className="rounded-2xl transform hover:scale-105 transition duration-500"
          />
          <div className="absolute -z-10 w-72 h-72 bg-yellow-300/20 blur-3xl rounded-full top-12 left-12"></div>
        </div>
      </div>
    </section>
  );
}
