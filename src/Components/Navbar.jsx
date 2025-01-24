import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-white text-2xl font-semibold">
          <a href="/">MyApp</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-white">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (when toggled) */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-800 text-white mt-4 space-y-4`}
      >
        <a href="/" className="block py-2 px-4">Home</a>
        <a href="/about" className="block py-2 px-4">About</a>
        <a href="/services" className="block py-2 px-4">Services</a>
        <a href="/contact" className="block py-2 px-4">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
