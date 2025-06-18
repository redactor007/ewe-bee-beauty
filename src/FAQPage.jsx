import React from "react";
import Layout from "./Layout";

export default function FAQPage() {
  const faqs = [
    {
      question: "Are your products FDA-approved?",
      answer: "Our products are not evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease."
    },
    {
      question: "Are your products safe for sensitive skin?",
      answer: "We use high-quality natural ingredients, but everyone’s skin is different. We recommend a patch test before regular use."
    },
    {
      question: "Can I use multiple products at once?",
      answer: "Yes. Our blends are designed to complement one another when used as part of your routine."
    },
    {
      question: "How often can I apply the products?",
      answer: "You can reapply as needed, up to once an hour."
    },
    {
      question: "Do you test on animals?",
      answer: "Absolutely not. Our products are cruelty-free."
    },
    {
      question: "Where are your ingredients sourced?",
      answer: "We use ethically sourced ingredients. Our tallow comes from Fields of Athenry Farm in Loudoun County, Virginia."
    },
    {
      question: "Are your products vegan?",
      answer: "Our oil blends are plant-based. However, our tallow balm contains animal fat from pasture-raised sources."
    },
    {
      question: "How should I store the products?",
      answer: "Store in a cool, dry place away from direct sunlight."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship within the United States."
    },
    {
      question: "What is your return policy?",
      answer: "Due to the nature of our products, all sales are final. If you have concerns, please contact us directly."
    }
  ];

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-12 text-gray-200">
        <h1 className="text-3xl font-bold text-green-400 mb-8 text-center">Frequently Asked Questions</h1>
        {faqs.map((faq, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="text-lg font-semibold text-white mb-1">{faq.question}</h2>
            <p className="text-sm text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
