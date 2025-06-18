import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import AboutPage from "./AboutPage";
import FAQPage from "./FAQPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="product/:slug" element={<ProductPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="faq" element={<FAQPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
