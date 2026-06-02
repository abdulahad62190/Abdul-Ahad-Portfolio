/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ShowcaseSection from "./components/ShowcaseSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] font-sans antialiased text-white selection:bg-[#FF6B00] selection:text-black scroll-smooth">
      {/* Dynamic System Navbar */}
      <Navbar onContactClick={handleScrollToContact} />

      {/* Main Structural Visual Stack */}
      <main>
        {/* 1. SECTION 1 — HERO */}
        <HeroSection />

        {/* 2. SECTION 2 — ABOUT */}
        <AboutSection />

        {/* 3. SECTION 3 — FEATURED WORK */}
        <ProjectsSection />

        {/* 4. SECTION 4 — PORTFOLIO SHOWCASE */}
        <ShowcaseSection />

        {/* 5. SECTION 5 — SERVICES */}
        <ServicesSection />

        {/* 6. SECTION 6 — CONTACT */}
        <ContactSection />
      </main>
    </div>
  );
}
