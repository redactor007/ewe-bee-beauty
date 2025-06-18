import React from "react";
import Layout from "./Layout";

export default function AboutPage() {
  return (
    <Layout>
      <div className="min-h-screen px-6 py-12 max-w-3xl mx-auto text-gray-200">
        <h1 className="text-3xl font-bold text-center text-green-400 mb-6">About Ewe Bee Beauty</h1>
        <p className="mb-4 leading-relaxed">
          Ewe Bee Beauty was born from a simple idea: healing doesn’t have to be complicated.
          Our products are rooted in nature, made with ingredients you can recognize, understand, and trust.
        </p>
        <p className="mb-4 leading-relaxed">
          This journey began as a personal one — searching for comfort for sore muscles, inflamed joints, and irritated skin when nothing else worked.
          Over time, what started as home remedies evolved into small-batch products crafted with intention and care.
        </p>
        <p className="mb-4 leading-relaxed">
          We draw on nature’s time-tested ingredients like pasture-raised tallow, soothing botanicals, and therapeutic essential oils.
          The tallow we use is ethically sourced from Fields of Athenry Farm in Loudoun County, Virginia — a family-owned farm committed to animal welfare and sustainability.
        </p>
        <p className="mb-4 leading-relaxed">
          Our mission is simple: to offer effective, honest products that restore comfort and confidence in your skin and body — the way nature intended.
        </p>
      </div>
    </Layout>
  );
}
