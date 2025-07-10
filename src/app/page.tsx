"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const hero = {
  name: "Raiy Hassan",
  tagline:
    "I transform generic AI-generated content into trusted, brand-aligned narratives—humanized, fact-checked, structurally optimized, and emotionally resonant.",
  cta: {
    label: "Let’s Work Together",
    link: "https://wa.me/923704202327",
  },
};

const about = `I help creators, entrepreneurs, and agencies rewrite AI-generated content into something that actually sounds human—clean, natural, and true to your brand voice.\n\nI’ve worked with advanced models like DeepSeek and Gemini and engineered proprietary prompt workflows to reduce AI-detection scores below 10%. From hallucination removal to structural clarity and platform-optimized final edits—my obsession with tone, trust, and truth drives every rewrite.`;

const services = [
  "Humanizing AI-Generated Content",
  "Tone, Voice & Personality Alignment",
  "Fact-Checking & Hallucination Detection",
  "SEO-Ready, Platform-Specific Edits",
  "Final Delivery That Feels Authentically Human",
];

const caseStudies = [
  {
    img: "/case1.png",
    title: "YouTube Script Rewrite",
    subtitle: "From robotic to relatable",
  },
  {
    img: "/case2.png",
    title: "Ad Copy Transformation",
    subtitle: "From generic to high-converting",
  },
  {
    img: "/case3.png",
    title: "Longform Content Humanization",
    subtitle: "From AI-detectable to authentic",
  },
];

const whyChoose = [
  "Engineered custom prompt systems to drop AI scores below 10%",
  "Deep research + real brand tone matching",
  "Transparent workflows with no exaggeration",
  "Final result: Human-sounding content that earns trust",
];

export default function Home() {
  const [showMain, setShowMain] = useState(false);
  const [logoDocked, setLogoDocked] = useState(false);

  useEffect(() => {
    // Entry animation timing: dot grow (1.2s), logo slide (0.8s), then show main
    const t1 = setTimeout(() => setLogoDocked(true), 1200);
    const t2 = setTimeout(() => setShowMain(true), 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Entry Animation */}
      <AnimatePresence>
        {!showMain && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-offwhite"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
          >
            <motion.div
              initial={{ scale: 0, boxShadow: "0 0 0px #183A2C" }}
              animate={{
                scale: logoDocked ? 0.25 : 1.2,
                boxShadow: logoDocked
                  ? "0 0 0px #183A2C"
                  : "0 0 80px 20px #183A2C99",
                y: logoDocked ? -260 : 0,
                x: logoDocked ? -480 : 0,
              }}
              transition={{
                scale: { duration: 1.2, ease: [0.4, 0.8, 0.2, 1] },
                y: { delay: 1.2, duration: 0.8, ease: [0.4, 0.8, 0.2, 1] },
                x: { delay: 1.2, duration: 0.8, ease: [0.4, 0.8, 0.2, 1] },
                boxShadow: { duration: 1.2 },
              }}
              style={{ originX: 0.5, originY: 0.5 }}
              className="bg-forest rounded-full flex items-center justify-center"
              style={{ width: 120, height: 120 }}
            >
              <motion.img
                src="/logo.png"
                alt="Logo"
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="w-24 h-24 object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Docked Logo */}
      <motion.div
        className="fixed top-6 left-8 z-40 flex items-center gap-2"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: logoDocked ? 1 : 0, y: logoDocked ? 0 : -40 }}
        transition={{ delay: 2, duration: 0.7 }}
      >
        <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
        <span className="font-heading text-2xl font-bold text-forest tracking-tight">Raiy Hassan</span>
      </motion.div>

      {/* Main Content */}
      <AnimatePresence>
        {showMain && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="pt-40 max-w-4xl mx-auto px-4"
          >
            {/* HERO SECTION */}
            <motion.section
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mb-24 text-center"
            >
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-8 text-forest">
                {hero.name}
              </h1>
              <p className="font-body text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-accentblue">
                {hero.tagline}
              </p>
              <a
                href={hero.cta.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-full bg-forest text-offwhite font-semibold text-lg shadow-lg hover:bg-accentblue transition-colors duration-300"
              >
                {hero.cta.label}
              </a>
            </motion.section>

            {/* ABOUT ME */}
            <motion.section
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-20"
            >
              <h2 className="font-heading text-3xl font-bold mb-4 text-forest">About Me</h2>
              <p className="font-body text-lg whitespace-pre-line text-[#222]">
                {about}
              </p>
            </motion.section>

            {/* SERVICES */}
            <motion.section
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-20"
            >
              <h2 className="font-heading text-3xl font-bold mb-4 text-forest">Services</h2>
              <ul className="space-y-3">
                {services.map((service, i) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3 font-body text-lg"
                  >
                    <span className="inline-block w-5 h-5 rounded-full bg-forest text-offwhite flex items-center justify-center mr-2">
                      ✓
                    </span>
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* CASE STUDIES */}
            <motion.section
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mb-20"
            >
              <h2 className="font-heading text-3xl font-bold mb-8 text-forest">Case Studies</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {caseStudies.map((cs, i) => (
                  <motion.div
                    key={cs.title}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.15, duration: 0.6 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4 border border-offwhite hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={cs.img}
                      alt={cs.title}
                      className="w-full h-40 object-cover rounded mb-4"
                    />
                    <h3 className="font-heading text-xl font-semibold mb-1 text-accentblue">
                      {cs.title}
                    </h3>
                    <p className="font-body text-sm text-forest mb-2">
                      {cs.subtitle}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* WHY CHOOSE ME */}
            <motion.section
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mb-20"
            >
              <h2 className="font-heading text-3xl font-bold mb-4 text-forest">Why Choose Me</h2>
              <ul className="list-disc pl-6 space-y-2 font-body text-lg">
                {whyChoose.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 + i * 0.1, duration: 0.5 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* 15-MIN CONSULT */}
            <motion.section
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mb-20 text-center"
            >
              <h2 className="font-heading text-2xl font-bold mb-2 text-forest">15-Min Consult</h2>
              <p className="font-body text-lg mb-4">
                Got a project or just exploring options? Let’s chat for 15 mins — no strings.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a
                  href="https://zoom.us/my/raihassan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-accentblue text-offwhite font-semibold shadow hover:bg-forest transition-colors duration-300"
                >
                  Zoom
                </a>
                <a
                  href="https://wa.me/923704202327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-forest text-offwhite font-semibold shadow hover:bg-accentblue transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </div>
            </motion.section>

            {/* CONTACT FORM */}
            <motion.section
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              className="mb-20 max-w-lg mx-auto"
            >
              <h2 className="font-heading text-2xl font-bold mb-2 text-forest">Contact</h2>
              <form className="space-y-4">
                <div>
                  <label className="block font-body mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded border border-forest focus:outline-none focus:ring-2 focus:ring-accentblue font-body"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block font-body mb-1">Email <span className="text-xs text-gray-500">(coming soon)</span></label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded border border-forest focus:outline-none focus:ring-2 focus:ring-accentblue font-body bg-gray-100 cursor-not-allowed"
                    placeholder="your@email.com"
                    disabled
                  />
                </div>
                <div>
                  <label className="block font-body mb-1">Project Brief</label>
                  <textarea
                    className="w-full px-4 py-2 rounded border border-forest focus:outline-none focus:ring-2 focus:ring-accentblue font-body"
                    rows={4}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    className="px-6 py-3 rounded-full bg-accentblue text-offwhite font-semibold shadow hover:bg-forest transition-colors duration-300"
                  >
                    Send Your Inquiry
                  </button>
                  <a
                    href="mailto:raihassan63991@gmail.com"
                    className="px-6 py-3 rounded-full bg-forest text-offwhite font-semibold shadow hover:bg-accentblue transition-colors duration-300 flex items-center"
                  >
                    Gmail
                  </a>
                </div>
              </form>
            </motion.section>

            {/* FOOTER */}
            <footer className="text-center text-sm text-gray-500 pb-8">
              &copy; {new Date().getFullYear()} Raiy Hassan. All rights reserved.
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
} 