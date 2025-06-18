import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <header className="bg-gray-800 py-6 px-4 text-center shadow-md">
        <div className="flex flex-col items-center">
          <img
            src="https://res.cloudinary.com/dl9khevbs/image/upload/v1750210713/logo_tba7co.jpg"
            alt="Ewe Bee Beauty Logo"
            className="h-28 mb-4"
          />
          <h1 className="text-3xl font-bold text-white">Ewe Bee Beauty</h1>
          <p className="mt-2 text-lg text-gray-300">Essential Oil-Based Balms & Lotions</p>
          <nav className="mt-4 space-x-6">
            <Link to="/" className="text-green-400 hover:underline">Home</Link>
            <Link to="/about" className="text-green-400 hover:underline">About</Link>
            <Link to="/faq" className="text-green-400 hover:underline">FAQ</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gray-800 py-4 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Ewe Bee Beauty. All rights reserved.</p>
      </footer>
    </div>
  );
}
