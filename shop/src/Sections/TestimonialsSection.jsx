function TestimonialsSection() {
    return (
        <section className="bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 py-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">
                    What Our Customers Say
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Testimonial Card 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                        <p className="text-gray-700 mb-4">
                            "Absolutely love the shirts! The quality is top-notch and delivery was super fast."
                        </p>
                        <h3 className="font-semibold text-lg">Rohit S.</h3>
                        <span className="text-gray-500 text-sm">Verified Buyer</span>
                    </div>

                    {/* Testimonial Card 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                        <p className="text-gray-700 mb-4">
                            "Stylish designs and perfect fit. I get compliments every time I wear them!"
                        </p>
                        <h3 className="font-semibold text-lg">Neha K.</h3>
                        <span className="text-gray-500 text-sm">Verified Buyer</span>
                    </div>

                    {/* Testimonial Card 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                        <p className="text-gray-700 mb-4">
                            "High-quality shirts at great prices. Will definitely order again."
                        </p>
                        <h3 className="font-semibold text-lg">Amit R.</h3>
                        <span className="text-gray-500 text-sm">Verified Buyer</span>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;
