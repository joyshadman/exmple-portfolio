// src/components/HeroSection.jsx
import React from "react";

/**
 * Notes:
 * - Replace fonts via your project CSS (e.g., index.css) to match screenshot.
 * - The background stripe effect is applied with inline CSS backgroundImage.
 */

const stripeBg = `repeating-linear-gradient(
  90deg,
  rgba(255,255,255,0.02) 0px,
  rgba(0,0,0,0) 1px,
  rgba(255,255,255,0.02) 8px
)`;

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "720px",
        backgroundImage: stripeBg,
        backgroundColor: "#222",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-12 py-12 relative flex items-start gap-12">
        {/* Left content */}
        <div className="w-1/2 pt-12">
          <div className="text-6xl leading-[0.9] font-extrabold text-cream">
            <div>GET &nbsp; YOUR</div>
            <div className="mt-2">GREAT</div>
            <div className="mt-2">DESIGN</div>
          </div>

          <p className="mt-4 text-sm text-gray-300 max-w-[420px]">
            Always available for freelance work, contact me and get your
            create design :)
          </p>

          <p className="mt-6 text-xs text-gray-400 max-w-[420px]">
            Hello, my name is Pattison and i am UX/UI designer and front-end
            developer, im working via developer 9 years and i know all about
            design
          </p>

          <button className="mt-8 inline-flex items-center gap-3 bg-[#c66b51] rounded-full px-6 py-3 text-sm text-white shadow">
            (hire me :) <span className="ml-3">→</span>
          </button>

          {/* Stats row */}
          <div className="mt-12 flex items-end gap-8">
            <div className="text-4xl font-bold text-cream">8</div>
            <div className="text-sm text-gray-400">Years experience</div>

            <div className="ml-8 text-4xl font-bold text-cream">5</div>
            <div className="text-sm text-gray-400">Themeforest awwards</div>

            <div className="ml-8 text-4xl font-bold text-cream">60</div>
            <div className="text-sm text-gray-400">Projects Done</div>
          </div>
        </div>

        {/* Right visual area */}
        <div className="w-1/2 relative">
          {/* Large left circle */}
          <div
            className="absolute rounded-full"
            style={{
              width: 420,
              height: 420,
              left: "20%",
              top: "8%",
              background: "#d6d6d6",
              boxShadow: "inset -16px -12px 0 rgba(0,0,0,0.06)",
            }}
          />

          {/* Right dark circle */}
          <div
            className="absolute rounded-full"
            style={{
              width: 420,
              height: 420,
              right: "6%",
              top: "18%",
              background: "rgba(0,0,0,0.5)",
              boxShadow: "0 0 0 80px rgba(0,0,0,0.12) inset",
            }}
          />

          {/* Overlap slice (the small crescent overlap) */}
          <div
            className="absolute rounded-full"
            style={{
              width: 140,
              height: 420,
              left: "50%",
              top: "12%",
              transform: "translateX(-40%)",
              background: "rgba(0,0,0,0.25)",
              borderRadius: "50%",
            }}
          />

          {/* Small text block on right circle */}
          <div
            className="absolute text-right pr-6"
            style={{ right: "10%", top: "38%", width: 180 }}
          >
            <div className="text-xs text-white underline">Fill out the</div>
            <div className="text-xs text-white underline">brief to find out</div>
            <div className="text-xs text-white underline">the cost</div>
          </div>

          {/* Vertical dot navigation (right edge) */}
          <div className="absolute right-0 top-28 flex flex-col gap-4 items-center">
            <div className="w-3 h-3 rounded-full bg-[#c66b51]" />
            <div className="w-3 h-3 rounded-full bg-white opacity-40" />
            <div className="w-3 h-3 rounded-full bg-white opacity-40" />
            <div className="w-3 h-3 rounded-full bg-white opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
