/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { PROJECTS } from "../data";

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="bg-[#000000] py-16 md:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <span className="font-mono text-xs text-[#FF6B00] tracking-[0.25em] uppercase block mb-3 font-semibold">
          03 // PORTFOLIO SHOWCASE
        </span>
        <h2 className="font-sans text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-[0.9]">
          CONTINUOUS <span className="text-[#FF6B00]">VISUAL SCRIP</span>
        </h2>
        <p className="font-sans text-gray-500 text-xs md:text-sm tracking-wide mt-2">
          Experience our design compositions in high-fidelity, full-width formats. Just scroll down.
        </p>
      </div>

      {/* Multiple Full-Width/Vast Screen showcases list */}
      <div className="space-y-24 md:space-y-36">
        {PROJECTS.map((proj, idx) => (
          <div 
            key={proj.id}
            className="w-full relative px-4 md:px-12 flex flex-col items-center"
          >
            {/* The project occupies most of the screen */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full max-w-6xl aspect-[16/10] md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-3xl border border-white/10 bg-[#060606] relative group shadow-2xl"
            >
              {/* Image element */}
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover object-center group-hover:scale-[1.015] transition-transform duration-[1.2s] brightness-90 group-hover:brightness-100"
                referrerPolicy="no-referrer"
              />

              {/* Minimal Text Overlay - only visible with clean styling */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-12">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="space-y-1.5 text-left">
                    <span className="bg-[#FF6B00] text-black font-mono text-[9px] tracking-widest font-extrabold px-2.5 py-1 rounded w-fit inline-block">
                      {proj.category.toUpperCase()}
                    </span>
                    <h3 className="font-sans font-black text-2xl md:text-4xl text-white uppercase tracking-tighter mt-1">
                      {proj.title}
                    </h3>
                  </div>
                  <div className="text-right font-mono text-3xl md:text-5xl text-[#FF6B00]/40 font-black tracking-tighter leading-none select-none">
                    {(idx + 1).toString().padStart(2, "0")}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Mini end signature to keep visual balance */}
      <div className="w-full text-center mt-24">
        <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em]">
          ✦ END OF HIGH-FIDELITY FEED ✦
        </p>
      </div>
    </section>
  );
}
