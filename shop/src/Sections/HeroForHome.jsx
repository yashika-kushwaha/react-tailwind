function HeroSection() {
    return (
        <section className="bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-300 text-black">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 flex flex-col-reverse lg:flex-row items-center gap-12">

                {/* Text Content */}
                <div className="text-center lg:text-left max-w-xl flex-1">
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-snug sm:leading-tight mb-6 transition-transform duration-500 
                    ease-out transform hover:-translate-y-1">
                        Elevate Your Style with Premium Shirts
                    </h1>
                    <p className="text-base sm:text-lg text-gray-700 mb-8 transition-opacity duration-500 ease-in-out hover:opacity-80">
                        Explore our exclusive collection of modern and classic shirts, designed to fit your lifestyle. Quality, comfort, and
                         style delivered right to your doorstep.
                    </p>

                    {/* Call-To-Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href="/products"
                            className="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3 rounded-lg font-semibold shadow-lg transform transition 
                            duration-300 hover:bg-yellow-500 hover:scale-105 hover:shadow-xl"
                        >
                            Shop Now
                        </a>
                        <a
                            href="/about"
                            className="border border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transform transition 
                            duration-300 hover:bg-white hover:text-gray-900 hover:scale-105 hover:shadow-lg"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="w-full max-w-md flex-1">
                    <img
                        src="images/men-s-formal.png"
                        alt="Premium Shirt Collection"
                        className="rounded-lg shadow-lg object-cover w-full h-auto transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                    />
                </div>

            </div>
        </section>
    );
}

export default HeroSection;
