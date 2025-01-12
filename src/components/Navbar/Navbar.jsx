import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="mb-20 h-[100px] flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink items-center">
        <h1 className="text-white text-2xl ml-6">GD</h1>
      </div>

      {/* Social Icons */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="#"
          className="text-white transition-transform duration-200 hover:scale-110 hover:text-cyan-400"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="#"
          className="text-white transition-transform duration-200 hover:scale-110 hover:text-pink-400"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="text-white transition-transform duration-200 hover:scale-110 hover:text-blue-400"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
