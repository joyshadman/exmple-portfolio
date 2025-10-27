// src/components/Sidebar.jsx
import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-[140px] bg-[#151515] border-r border-[#222] relative flex flex-col items-center py-6">
  
      <div className="absolute left-0 top-6 transform -translate-x-full">
        <div className="text-xs text-gray-400 rotate-90 origin-left">1.0</div>
      </div>

      <div className="text-cream text-2xl font-bold mb-6">P</div>

      {/* vertical social icons (placeholders) */}
      <div className="flex flex-col gap-3 text-sm text-gray-400">
        <div>f</div>
        <div>t</div>
        <div>in</div>
      </div>

      {/* vertical name at bottom */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[1px]">
        <div
          className="text-white text-xs tracking-widest"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            transform: "rotate(180deg)",
          }}
        >
          MY NAME IS ROBERT
        </div>
      </div>
    </aside>
  );
}
