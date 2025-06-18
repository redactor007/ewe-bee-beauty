import React from "react";
import { Link } from "react-router-dom";
import { productData } from "./productData";

export default function HomePage() {
  return (
    <div className="px-4 py-12 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center text-white">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productData.map((product) => {
          const borderColor = product.color === "purple"
            ? "border-purple-500 border"
            : product.color === "orange"
            ? "border-orange-400 border"
            : "border-teal-500 border";

          const buttonColor = product.color === "purple"
            ? "bg-purple-600 hover:bg-purple-700"
            : product.color === "orange"
            ? "bg-orange-500 hover:bg-orange-600"
            : "bg-teal-600 hover:bg-teal-700";

          return (
            <Link to={`/product/${product.slug}`} key={product.slug}>
              <div className={`bg-gray-800 text-white rounded shadow-sm hover:shadow-lg transition-shadow ${borderColor}`}>
                <div className="p-4">
                  <img src={product.image} alt={product.title} className="rounded mb-4 w-full h-60 object-cover" />
                  <h3 className="font-semibold text-xl">{product.title}</h3>
                  <p className="text-sm mt-1 text-gray-300">{product.description}</p>
                  <button className={`mt-4 w-full px-4 py-2 rounded font-medium text-white ${buttonColor}`}>
                    View Product
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
