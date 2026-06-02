/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, X, ZoomIn, ChevronRight, Layers } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

  const filters = [
    "All",
    "Sports Posters",
    "Social Media Posts",
    "Event Posters",
    "Product Advertisements",
    "Branding Projects",
    "Marketing Creatives"
  ];

  const filteredProjects = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Absolute decorative agency accent */}
      <div className="absolute top-10 left-10 font-mono text-[9px] text-[#FF6B00]/25 tracking-[0.3em] uppercase select-none pointer-events-none hidden xl:block">
        PORTFOLIO ARCHIVE // COLD RENDER GRID
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div>
            <span className="font-mono text-xs text-[#FF6B00] tracking-[0.2em] uppercase block mb-3 font-semibold">
              02 // EXQUISITE GALLERY
            </span>
            <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              FEATURED <span className="text-[#FF6B00]">WORK GALLERY</span>
            </h2>
            <p className="font-sans text-gray-400 text-sm md:text-base leading-relaxed mt-4 max-w-xl font-light">
              A meticulously curated compilation of high-end design assets. Hover to inspect compositions. Click to view high-resolution mockups instantly.
            </p>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
            80% Space Visuals // 20% Technical Copy
          </div>
        </div>

        {/* Categories Tabs Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-white/5 overflow-x-auto scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-mono text-[10px] tracking-[0.16em] uppercase px-4 py-2.5 rounded-lg transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeFilter === filter
                  ? "bg-[#FF6B00] text-black font-extrabold shadow-lg shadow-[#FF6B00]/15"
                  : "bg-white/2 text-gray-400 hover:text-white hover:bg-white/5 border border-white/5"
              }`}
            >
              {filter === "All" ? "ALL WORKS" : filter.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Showcase Masonry/Flex Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => setLightboxProject(project)}
                className="group relative cursor-pointer bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-[#FF6B00]/45 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF6B00]/10"
              >
                {/* Premium Mockup Frame */}
                <div className="relative aspect-[4/5] bg-black overflow-hidden">
                  {/* Neon Glow Rim Backing */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#FF6B00]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 brightness-[0.9] group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />

                  {/* Dynamic Dark Gradient & Logo Spec Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 opacity-40 group-hover:opacity-85 transition-opacity duration-300 flex flex-col justify-between p-6">
                    
                    {/* Top line with Category badge */}
                    <div className="flex items-center justify-between pointer-events-none">
                      <span className="bg-black/85 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded font-mono text-[9px] text-[#FF6B00] uppercase tracking-widest font-black">
                        {project.category}
                      </span>
                      <div className="w-6 h-6 rounded bg-black/70 border border-white/10 flex items-center justify-center">
                        <Layers className="w-3 h-3 text-white/50" />
                      </div>
                    </div>

                    {/* Full screen visual inspection click action */}
                    <div className="flex flex-col gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-sans font-black text-lg text-white uppercase tracking-tight group-hover:text-[#FF6B00] transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-white/50 group-hover:text-white transition-colors font-mono text-[9px] tracking-widest uppercase">
                        <span>Inspect Artwork</span>
                        <ChevronRight className="w-3 h-3 text-[#FF6B00]" />
                      </div>
                    </div>

                  </div>

                  {/* Absolute zoom button overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#FF6B00] text-black font-extrabold flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-350 shadow-lg shadow-[#FF6B00]/40">
                    <ZoomIn className="w-5 h-5 font-black" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Clean, Immersive Free-form Image Lightbox Modal */}
        <AnimatePresence>
          {lightboxProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/95 backdrop-blur-md">
              {/* Backing Dismissal Zone */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxProject(null)}
                className="absolute inset-0 cursor-zoom-out"
              />

              {/* Lightbox container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
                className="relative max-w-4xl w-full flex flex-col items-center z-10"
              >
                {/* Upper control strip */}
                <div className="w-full flex items-center justify-between mb-4 px-2">
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-[#FF6B00] tracking-widest uppercase font-bold">
                      {lightboxProject.category} // PORTFOLIO SPECIMEN
                    </span>
                    <h3 className="font-sans text-lg font-black text-white uppercase tracking-tight">
                      {lightboxProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setLightboxProject(null)}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FF6B00] border border-white/10 hover:border-transparent text-white hover:text-black flex items-center justify-center transition-all duration-300 cursor-pointer"
                    aria-label="Dismiss Lightbox"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Ultimate Showcase Display Frame */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black aspect-[4/5] max-h-[75vh] shadow-2xl flex items-center justify-center w-full">
                  <img
                    src={lightboxProject.image}
                    alt={lightboxProject.title}
                    className="w-full h-full object-contain max-h-[75vh]"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle vector watermark */}
                  <div className="absolute bottom-4 left-4 font-mono text-[9px] text-[#FF6B00]/45 tracking-widest uppercase pointer-events-none">
                    ABDUL AHAD CREATIVE DESIGN STACK
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
