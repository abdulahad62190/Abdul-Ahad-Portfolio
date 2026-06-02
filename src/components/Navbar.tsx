/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Clock3 } from "lucide-react";

export interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Elegant system time ticker to match top-tier design agency headers
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "UTC",
      };
      setCurrentTime(now.toLocaleTimeString("en-US", options) + " UTC");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#projects" },
    { name: "Showcase", href: "#showcase" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0A]/95 border-b border-white/10 py-4 backdrop-blur-md"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo & Monogram */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="flex items-center gap-1.5 font-sans font-black text-xl tracking-tighter text-white">
              <span className="text-[#FF6B00]">AHAD</span>
              <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full mt-2.5"></span>
              <span>STUDIO</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-[11px] text-white/50 hover:text-white transition-colors duration-200 uppercase tracking-[0.2em] font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#FF6B00] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Extra Meta Info & Call to Action */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Clock ticker */}
            <div className="flex items-center gap-2 font-mono text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <Clock3 className="w-3.5 h-3.5 text-[#FF6B00]" />
              <span className="tracking-widest">{currentTime || "13:14 UTC"}</span>
            </div>

            <button
              onClick={onContactClick}
              className="group flex items-center gap-2 bg-[#FF6B00] text-black hover:bg-white hover:text-black font-sans font-semibold text-xs uppercase tracking-widest px-5 py-2.5 rounded-lg transition-all duration-300 cursor-pointer shadow-lg shadow-[#FF6B00]/25 hover:shadow-white/10"
            >
              Hire Me
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Responsive Menu Trigger */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={onContactClick}
              className="bg-[#FF6B00] text-black font-sans text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded"
            >
              Hire
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#FF6B00] transition-colors p-1 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Curtain Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] bg-black/98 z-40 flex flex-col justify-between p-8 border-t border-white/5 md:hidden"
          >
            <div className="flex flex-col gap-6 mt-6">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-sans text-2xl font-bold text-white hover:text-[#FF6B00] uppercase tracking-wider block"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-6 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
                <Clock3 className="w-4 h-4 text-[#FF6B00]" />
                <span>{currentTime || "13:14 UTC"}</span>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onContactClick();
                }}
                className="w-full text-center bg-[#FF6B00] text-black py-4 rounded-xl font-sans font-bold uppercase tracking-wider text-sm shadow-xl shadow-[#FF6B00]/25"
              >
                Start Creative Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
