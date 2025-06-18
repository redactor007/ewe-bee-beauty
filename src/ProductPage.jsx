import React from "react";
import { useParams, Link } from "react-router-dom";
import { productData } from "./productData";

export default function ProductPage() {
  const { slug } = useParams();
  const product = productData.find((p) => p.slug === slug);

  if (!product) {
    return <div className="text-center text-white mt-20">Product not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-white">
      <img src={product.image} alt={product.title} className="w-full h-72 object-cover rounded mb-6 border" />
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <p className="text-md mb-4 text-gray-300">{product.description}</p>

      <section className="mb-6">
        <h2 className="text-lg font-semibold text-green-400 mb-2">Ingredients</h2>
        <p className="text-sm text-gray-300">See packaging for full list of essential oils and carrier oils used in this product.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold text-green-400 mb-2">How to Use</h2>
        <p className="text-sm text-gray-300">Apply gently to intended area. Use as needed, up to once an hour.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold text-green-400 mb-2">FDA Disclaimer</h2>
        <p className="text-sm text-gray-400">This product is not intended to diagnose, treat, cure, or prevent any disease. Not evaluated by the FDA.</p>
      </section>

      <Link to="/" className="text-green-400 hover:underline text-sm">← Back to Home</Link>
    </div>
  );
}
