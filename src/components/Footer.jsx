import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import FooterLogo from '/assets/foot-logo.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0A0F1C] via-black to-[#1A0D0B] text-white pt-6 pb-6 px-6">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 border-b border-zinc-800 pb-6">
        {/* Logo */}
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <img
            src={FooterLogo}
            alt="Logo"
            className="h-8 md:h-10 object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm font-medium text-center">
          <div className="flex gap-4">
            <a href="#product" className="hover:text-orange-500 transition">
              Product
            </a>
            <a href="#company" className="hover:text-orange-500 transition">
              Company
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#contact" className="hover:text-orange-500 transition">
              Contact
            </a>
            <a href="internships" className="hover:text-orange-500 transition">
              Internships
            </a>
          </div>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center md:justify-end gap-4">
          <a
            href="https://x.com/swiftransactHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-zinc-800 hover:bg-orange-500 transition"
          >
            <FaTwitter className="text-white w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/swiftransact.finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-zinc-800 hover:bg-orange-500 transition"
          >
            <FaInstagram className="text-white w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/swiftransact/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-zinc-800 hover:bg-orange-500 transition"
          >
            <FaLinkedin className="text-white w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom Legal */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 mt-6 gap-3 md:gap-0 text-center">
        {/* Privacy & Terms */}
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#privacy" className="hover:text-gray-300 transition">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-gray-300 transition">
            Terms of Use
          </a>
        </div>

        {/* Copyright */}
        <p>© Copyright 2024. All Rights Reserved</p>

        {/* Designer Credit */}
        <p>
          Designed by{" "}
          <span className="text-white">Swiftransact Technologies</span>
        </p>
      </div>
    </footer>
  );
}
