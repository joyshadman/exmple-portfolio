// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <header className="w-full bg-[#0f0f0f] border-b border-[#2b2b2b]">
      <div className="max-w-[1200px] mx-auto px-8 py-4 flex items-center justify-between text-sm text-gray-300">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-cream">P</div>
          <div className="flex gap-3 text-xs">
            <span className="opacity-60">f</span>
            <span className="opacity-60">t</span>
            <span className="opacity-60">in</span>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 items-center text-[12px] uppercase tracking-wider text-[#bfbfbf]">
          <a className="text-[#c96e53]">HOME</a>
          <a>PROJECTS</a>
          <a>AWWARDS</a>
          <a>TESTIMONIALS</a>
          <a>BLOG</a>
          <a>CONTACT</a>
        </nav>

        <div className="text-sm text-gray-400">+2(315) 590 83 68</div>
      </div>
    </header>
  );
}
