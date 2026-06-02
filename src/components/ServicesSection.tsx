/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { SERVICES } from "../data";

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#000000] border-t border-white/5 overflow-hidden">
      {/* Background radial flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#FF6B00]/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs text-[#FF6B00] tracking-[0.25em] uppercase block mb-3 font-semibold">
            04 // FOCUS CAPABILITIES
          </span>
          <h2 className="font-sans text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            CREATIVE <span className="text-[#FF6B00]">SERVICES</span>
          </h2>
          <p className="font-sans text-gray-400 text-sm md:text-base leading-relaxed mt-4 font-light max-w-xl">
            A precise spectrum of high-end design services engineered for maximum digital conversion and brand authority.
          </p>
        </div>

        {/* Minimal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((serv, idx) => (
            <motion.div
              key={serv.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-8 rounded-2xl bg-[#050505] border border-white/5 hover:border-[#FF6B00]/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Micro Numeric tag */}
                <div className="font-mono text-xs text-[#FF6B00] font-bold">
                  {(idx + 1).toString().padStart(2, "0")} // CAPABILITY
                </div>
                
                <h3 className="font-sans font-black text-lg md:text-xl text-white uppercase tracking-tight">
                  {serv.title}
                </h3>
                
                <p className="font-sans text-xs text-gray-500 leading-relaxed font-light">
                  {serv.description}
                </p>
              </div>

              {/* Minimal Design visual bullet layout line */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="font-mono text-[8px] text-gray-600 uppercase tracking-widest">
                  BEHANCE SPEC READY
                </span>
                <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
