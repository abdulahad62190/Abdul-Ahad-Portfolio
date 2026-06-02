/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin, Globe, MessageSquare, ArrowUpRight, Send, CheckCircle2 } from "lucide-react";
import { IMAGES, EMAIL_ADDRESS, BEHANCE_LINK, LINKEDIN_LINK, WHATSAPP_LINK } from "../data";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const socialLinks = [
    {
      name: "Email Studio",
      value: "abdulahad62190@gmail.com",
      href: EMAIL_ADDRESS,
      icon: Mail,
      sub: "Rapid response within 4 hours"
    },
    {
      name: "LinkedIn Network",
      value: "linkedin.com/in/abdulahad",
      href: LINKEDIN_LINK,
      icon: Linkedin,
      sub: "B2B professional relations"
    },
    {
      name: "Behance Profile",
      value: "behance.net/abdulahad62190",
      href: BEHANCE_LINK,
      icon: Globe,
      sub: "Full visual case archives"
    },
    {
      name: "WhatsApp Direct",
      value: "+92 300 0000000",
      href: WHATSAPP_LINK,
      icon: MessageSquare,
      sub: "Immediate messaging thread"
    }
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#000000] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Two-part layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Direct channels and mascot */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="font-mono text-xs text-[#FF6B00] tracking-[0.2em] uppercase block mb-3 font-semibold">
                05 // LET'S WORK TOGETHER
              </span>
              <h2 className="font-sans text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                LET’S WORK <span className="text-[#FF6B00] block mt-1">TOGETHER</span>
              </h2>
              <p className="font-sans text-gray-400 text-sm md:text-base leading-relaxed mt-6">
                Have an athletic brand launch, luxury watch ad, or social graphics ecosystem that needs high-velocity design energy? Get in touch immediately.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              <span className="font-mono text-[9px] text-[#FF6B00] tracking-widest uppercase block mb-2 font-bold">
                DIRECT CONTACT CHANNELS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 bg-white/2 border border-white/5 hover:border-[#FF6B00]/40 rounded-xl transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-black group-hover:bg-[#FF6B00] transition-all">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-sans font-bold text-xs text-white uppercase tracking-wider group-hover:text-[#FF6B00] transition-colors">
                            {link.name}
                          </span>
                          <span className="font-mono text-[10px] text-gray-500 mt-0.5">
                            {link.value}
                          </span>
                        </div>
                      </div>
                      <div className="text-right flex flex-col items-end">
                        <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                        <span className="font-mono text-[8px] text-gray-600 uppercase tracking-widest mt-1">
                          {link.sub}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Mini form + brand mascot sticker overlay */}
          <div className="lg:col-span-7">
            <div className="bg-[#050505] border border-white/5 p-6 md:p-10 rounded-3xl relative overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 relative z-10"
                  >
                    {/* Header values */}
                    <div>
                      <span className="font-mono text-[10px] text-[#FF6B00] tracking-widest uppercase block mb-1">
                        SECURE DIGEST INPUT
                      </span>
                      <h3 className="font-sans font-black text-xl text-white uppercase tracking-tight">
                        TRANSMIT SECURED SPEC SUMMARY
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block font-bold">
                          Client Name or Brand
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe / Vanguard FC"
                          className="w-full bg-[#0A0A0A] border border-white/5 focus:border-[#FF6B00]/40 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-700 outline-none transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block font-bold">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. hello@vanguardfc.com"
                          className="w-full bg-[#0A0A0A] border border-white/5 focus:border-[#FF6B00]/40 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-700 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Description message */}
                    <div className="space-y-2">
                      <label className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block font-bold">
                        Project Spec Targets
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Outline what campaign posters, styles, or visual deliverables you desire..."
                        className="w-full bg-[#0A0A0A] border border-white/5 focus:border-[#FF6B00]/40 rounded-xl px-4 py-3.5 text-xs text-white placeholder-gray-700 outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="group w-full flex items-center justify-center gap-2 bg-[#FF6B00] disabled:bg-[#FF6B00]/50 text-black font-sans font-bold text-xs uppercase tracking-widest py-4 rounded-xl cursor-pointer shadow-lg shadow-[#FF6B00]/15 hover:shadow-white/10 transition-all duration-300"
                    >
                      {loading ? (
                        <span>Compiling variables...</span>
                      ) : (
                        <>
                          <span>Transmit Onboarding Request</span>
                          <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4 relative z-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] mb-2 animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <span className="font-mono text-[9px] bg-[#FF6B00]/10 text-[#FF6B00] px-2.5 py-1 rounded uppercase tracking-widest font-bold">
                      PIPELINE COMPILATION SECURED
                    </span>
                    <h3 className="font-sans text-2xl font-black text-white uppercase tracking-tight">
                      Onboarding Target Synced
                    </h3>
                    <p className="font-sans text-gray-400 text-sm max-w-sm leading-relaxed">
                      Thank you for choosing Ahad Studio. I have received your request and will contact you within 4 hours. Let's create visual mastery together.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          message: ""
                        });
                      }}
                      className="font-mono text-[10px] text-gray-500 hover:text-white uppercase tracking-widest pt-4 block cursor-pointer transition-all"
                    >
                      ← Submit another spec sheet
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Grid abstract overlay behind form */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25 pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Minimal, beautiful branding foot-stamp */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 group">
            <div className="flex items-center gap-1.5 font-sans font-black text-lg tracking-tighter text-white">
              <span className="text-[#FF6B00]">AHAD</span>
              <span className="w-1 h-1 bg-[#FF6B00] rounded-full mt-2.5"></span>
              <span>STUDIO</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 font-mono text-[9px] text-gray-600">
            <span>© 2026 ABDUL AHAD // CREATIVE SYSTEMS ALL RIGHT RESERVED</span>
            <span>BEHANCE PORTFOLIO VERIFIED ARCHIVE</span>
          </div>
        </div>

      </div>
    </section>
  );
}
