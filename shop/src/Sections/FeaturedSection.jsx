import React from "react";

export default function FeaturedSection() {
  const products = [
    {
      id: 1,
      name: "Classic White Shirt",
      price: "$49",
      img: "/public/images/classic_white_shirt.jpg",
    },
    {
      id: 2,
      name: "Premiumm Black Shirt",
      price: "$59",
      img: "/public/images/Premium_Black_Shirt.jpg",
    },
    {
      id: 3,
      name: "Luxury Blue Shirt",
      price: "$65",
      img: "/public/images/Luxury_Blue_Shirt.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-600 via-gray-400 to-black py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Featured Collection
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Explore our latest premium shirts designed for comfort and style.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-yellow-500 font-bold mt-2">{product.price}</p>
                <button className="mt-5 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
