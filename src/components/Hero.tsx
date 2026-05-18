import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import PixelBackground from "./PixelBackground";
import Globe from "./Globe";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 relative overflow-hidden"
    >
      <PixelBackground />
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-pop-pink/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-pop-yellow/30 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="text-6xl md:text-8xl font-black leading-[1.1] mb-8"
          >
            {t.hero.title.split(/(Wanjing \(Coco\) Su|苏琬婧 \(Coco\))/).map((part, i) => (
              <span key={i} className={part.includes("Coco") ? "text-pop-pink relative inline-block" : "text-pop-purple"}>
                {part}
              </span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-ink/70 max-w-md mb-10 leading-relaxed font-medium"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#projects"
              className="group relative inline-block text-lg font-bold"
            >
              <span className="relative z-10 block px-10 py-5 bg-pop-yellow rounded-2xl border-4 border-ink shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-200">
                {t.hero.cta}
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, rotate: 10, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="relative aspect-square"
        >
          <div className="absolute inset-0 bg-pop-blue rounded-[3rem] rotate-6" />
          <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-8 border-ink shadow-2xl">
            <img
              src="https://raw.githubusercontent.com/denariousco/Profile/refs/heads/main/NegativeSpace_03.jpg"
              alt="Wanjing (Coco) Su"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Floating emoji/decoration */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-10 -right-10 w-24 h-24 bg-white rounded-full border-4 border-ink shadow-xl flex items-center justify-center text-5xl"
          >
            🎨
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
