import { useEffect, useState } from "react";
import lplogo from "../assets/lplogo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
<a href="/" className="flex items-center">
  <img
    src={lplogo}
    alt="LP Joinery & Building"
    className="h-6 w-auto object-contain transition-transform duration-300 hover:scale-105"
  />
</a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-10">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm font-medium text-black transition duration-300 group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#C49A6C] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-medium text-white bg-black rounded-full transition-all duration-300 hover:bg-[#C49A6C] hover:text-black"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Menu Icon (optional placeholder) */}
        <div className="md:hidden">
          <button className="text-black">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}