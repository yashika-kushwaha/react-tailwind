function FeaturesSection() {
    return (
        <section className="bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-300 py-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">
                    Why Choose Our Shirts
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    
                    {/* Feature Card 1 */}
                    <div className="bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 p-8 rounded-xl shadow-lg 
                    transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="text-5xl mb-4">👕</div>
                        <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                        <p className="text-gray-700">
                            Our shirts are made from the finest materials ensuring comfort, durability, and style.
                        </p>
                    </div>

                    {/* Feature Card 2 */}
                    <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100 p-8 rounded-xl shadow-lg 
                    transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="text-5xl mb-4">🚚</div>
                        <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                        <p className="text-gray-700">
                            Get your favorite shirts delivered right to your doorstep quickly and safely.
                        </p>
                    </div>

                    {/* Feature Card 3 */}
                    <div className="bg-gradient-to-r from-green-100 via-teal-100 to-cyan-100 p-8 rounded-xl shadow-lg 
                    transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="text-5xl mb-4">💎</div>
                        <h3 className="text-xl font-semibold mb-2">Stylish Designs</h3>
                        <p className="text-gray-700">
                            Modern and classic styles that fit every occasion, making you look your best always.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;
