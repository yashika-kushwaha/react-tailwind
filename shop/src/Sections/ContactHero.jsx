import React from "react";
export default function ContactHero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Get in <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-lg">
            Have any questions or need support? Our team is here to help you.
            Reach out to us anytime and we’ll respond as quickly as possible.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-lg hover:bg-yellow-300 transition">
              Contact Us
            </button>
            <button className="px-6 py-3 border border-gray-400 text-gray-200 rounded-xl hover:bg-gray-800 transition">
              Live Chat
            </button>
          </div>
        </div>

        {/* Right Illustration / Image */}
        <div className="relative flex justify-center">
          <img
            src="/public/images/Support.png"
            alt="Contact Support"
            className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
          />
          <div className="absolute w-80 h-80 bg-yellow-400/20 blur-3xl rounded-full top-10 right-10"></div>
        </div>
      </div>
    </section>
  );
}
