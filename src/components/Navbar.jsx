import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu on click
    }
  };

  const navLinks = [
    { name: "Profile", id: "profile" },
    { name: "Innovations", id: "innovations" },
    { name: "Culture", id: "culture" },
    { name: "Challenges", id: "challenges" },
    { name: "Gallery", id: "gallery" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo / Name area */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-academic-primary">
              Mateli Boniface Kioko
            </span>
            <span className="ml-3 px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded hidden md:block">
              Capstone I & II
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-600 hover:text-academic-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
            <a
              href="/documents/Resume_Eng.pdf"
              target="_blank"
              className="bg-academic-primary text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-900 transition"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-academic-primary focus:outline-none p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-gray-600 hover:text-academic-primary hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
