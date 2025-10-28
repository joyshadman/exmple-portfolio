import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full border-b-2 border-[#efe9d8]">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between text-sm text-gray-300">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-cream">P</div>
          <div className="h-12 border-r-2 border-[#efe9d8]"></div>
          <div className="flex gap-3 text-xs">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#efe9d8] text-2xl hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#efe9d8] text-2xl hover:scale-110 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#efe9d8] text-2xl hover:scale-110 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 items-center text-[12px] uppercase tracking-wider text-[#bfbfbf]">
          <a className="hover:text-[#c96e53] duration-300 ease-in-out" href="#">HOME</a>
          <a className="hover:text-[#c96e53] duration-300 ease-in-out" href="#">PROJECTS</a>
          <a className="hover:text-[#c96e53] duration-300 ease-in-out" href="#">AWWARDS</a>
          <a className="hover:text-[#c96e53] duration-300 ease-in-out" href="#">TESTIMONIALS</a>
          <a className="hover:text-[#c96e53] duration-300 ease-in-out" href="#">BLOG</a>
          <a className="hover:text-[#c96e53] duration-300 ease-in-out" href="#">CONTACT</a>
        </nav>

        <div className="text-sm text-gray-400">+2(315) 590 83 68</div>
      </div>
    </header>
  );
}
