/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowDown, MoveRight } from "lucide-react";
import { IMAGES } from "../data";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen bg-[#000000] overflow-hidden flex items-center pt-24 md:pt-28 pb-12">
      {/* Structural visual grids and glowing backdrops */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0c_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0c_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none" />
      
      {/* High-Impact Brand Orange Glow Accent Overlays */}
      <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full bg-[#FF6B00]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-[#FF6B00]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Text and Identity Block */}
        <div className="lg:col-span-6 space-y-8 text-left">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[9px] tracking-[0.2em] text-[#FF6B00] uppercase"
            >
              <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full animate-pulse" />
              AESTHETIC PORTFOLIO SYSTEM
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="font-sans text-6xl md:text-8xl lg:text-[90px] leading-[0.85] font-black text-white tracking-tighter uppercase">
                ABDUL<br/>
                <span className="text-[#FF6B00]">AHAD</span>
              </h1>
              <p className="font-mono text-xs md:text-sm tracking-[0.25em] text-white/50 uppercase font-black pt-1">
                // GRAPHIC DESIGNER
              </p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-l-2 border-[#FF6B00] pl-6 text-white/70 text-sm md:text-base leading-relaxed max-w-lg font-light"
          >
            Creating impactful visuals for brands, businesses, and digital experiences.
          </motion.p>

          {/* Core Action Call buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center bg-white text-black hover:bg-[#FF6B00] hover:text-black transition-colors font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-xl hover:shadow-[#FF6B00]/25 cursor-pointer"
            >
              <span>View Portfolio</span>
              <MoveRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-black" />
            </a>

            <a
              href="#contact"
              className="font-sans text-xs uppercase tracking-widest text-white hover:text-[#FF6B00] font-bold border border-white/10 hover:border-[#FF6B00] px-8 py-4 rounded-xl backdrop-blur-sm bg-white/2 hover:bg-white/5 transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Side: High-End Personal Brand Mascot Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative mx-auto max-w-[420px] lg:max-w-none group">
            
            {/* Dynamic Ambient backlighting/Orange glow accents */}
            <div className="absolute -inset-2 bg-[#FF6B00]/15 rounded-3xl blur-2xl group-hover:bg-[#FF6B00]/25 transition duration-700 pointer-events-none" />
            
            {/* Frameless Glass Border Showcase container */}
            <div className="relative overflow-hidden rounded-3xl bg-white border border-white/10 aspect-[4/5] md:aspect-square lg:aspect-[4/5] p-6 flex items-center justify-center shadow-2xl">
              <img
                src={IMAGES.heroArtwork}
                alt="Abdul Ahad Digital Illustration Mascot"
                className="w-full h-full object-contain object-center group-hover:scale-[1.03] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Behance-Type Production Technical Grid overlay */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-white/10 py-1.5 px-3 rounded font-mono text-[9px] text-[#FF6B00] uppercase tracking-widest font-bold">
                BRAND MASCOT // AHAD
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
                  <span className="font-mono text-[9px] text-white/90 tracking-widest uppercase">
                    PROMINENT PREVIEW
                  </span>
                </div>
                <span className="font-mono text-[8px] text-[#FF6B00] uppercase tracking-widest leading-none font-bold">
                  VECTOR MASTER
                </span>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>

      {/* Elegant Micro indicator of downward content */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none opacity-40">
        <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-[#FF6B00]" />
        </motion.div>
      </div>
    </section>
  );
}
