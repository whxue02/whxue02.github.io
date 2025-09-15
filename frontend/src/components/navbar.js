import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="relative flex items-center h-16 w-full px-4 sm:px-6 lg:px-8">
        {/* left */}
        <div className="absolute left-4 md:left-8 text-xl font-mono font-bold text-black tracking-tight">
        <a
              key="Home"
              href={`/`}
              className="relative hover:text-black transition-colors duration-300 group"
            >
              CHERYL WANG
              
            </a>
        </div>

        {/* center (desktop) */}
        <div className="flex-1 flex justify-center hidden md:flex space-x-10 text-black font-mono">
          {["EXPERIENCE", "PROJECTS", "SKILLS"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative hover:text-black transition-colors duration-300 group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* right (desktop) */}
        <div className="absolute right-4 md:right-8 hidden md:block">
          <a
            href="/CherylWangResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border-2 border-blue  font-mono text-blue hover:bg-blue hover:text-white transition-all duration-300"
          >
            RESUME
          </a>
        </div>

        {/* mobile menu button */}
        <div className="ml-auto md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-200 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {["ABOUT", "PROJECTS", "SKILLS"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block text-gray-800 font-mono px-2 py-2 hover:bg-gray-100 transition"
              >
                {item}
              </a>
            ))}
            <a
              href="/CherylWangResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-2 py-2 font-mono border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
