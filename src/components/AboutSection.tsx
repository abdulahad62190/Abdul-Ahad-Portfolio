/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { IMAGES } from "../data";

export default function AboutSection() {
  const specializations = [
    "Social Media Design",
    "Sports Posters",
    "Brand Visuals",
    "Advertising Creatives",
    "Marketing Design"
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#000000] overflow-hidden border-t border-white/5">
      {/* Background ambient glowing accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#FF6B00]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs text-[#FF6B00] tracking-[0.25em] uppercase block mb-3 font-semibold">
            01 // CORE DISCIPLINE
          </span>
          <h2 className="font-sans text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            CREATIVE <span className="text-[#FF6B00]">STATEMENT</span>
          </h2>
        </div>

        {/* Two-Column Cozy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brief and impactful bio */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-sans text-xl md:text-2xl font-bold text-white leading-snug">
              Graphic Designer specializing in high-contrast visual composites and premium design architectures.
            </h3>
            
            <p className="font-sans text-gray-400 text-sm md:text-base leading-relaxed">
              I skip the long corporate paragraphs. I concentrate on striking visual impact, premium contrast ratios, and modern compositions. Every single graphic asset is custom-tailored to grab immediate digital attention.
            </p>

            {/* Concise Layout Specializations */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <span className="font-mono text-[9px] text-[#FF6B00] uppercase tracking-widest block font-bold">
                SPECIALIZING IN:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {specializations.map((spec) => (
                  <div
                    key={spec}
                    className="flex items-center gap-3 bg-white/2 border border-white/5 px-4 py-3 rounded-xl hover:border-[#FF6B00]/30 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                    <span className="font-sans text-xs md:text-sm font-semibold text-white/90">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Personal Mascot Accent with orange glows */}
          <div className="lg:col-span-5 relative">
            <div className="relative group max-w-[340px] lg:max-w-none mx-auto">
              
              {/* Backing Glow Ring */}
              <div className="absolute -inset-1 bg-[#FF6B00]/10 rounded-2xl blur-lg group-hover:bg-[#FF6B00]/20 transition duration duration-500 pointer-events-none" />

              {/* Minimal Box frame */}
              <div className="relative overflow-hidden aspect-square rounded-2xl border border-white/10 bg-white shadow-2xl p-4 flex items-center justify-center">
                <img
                  src={IMAGES.avatar}
                  alt="Abdul Ahad Creative Avatar illustration"
                  className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute bottom-3 left-3 right-3 bg-black/95 backdrop-blur-md border border-white/10 px-3 py-2 rounded-lg flex justify-between items-center">
                  <span className="font-mono text-[9px] text-white/50 tracking-wider">CREATOR ALIAS</span>
                  <span className="font-mono text-[8px] text-[#FF6B00] font-black uppercase">
                    verified brand asset
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
