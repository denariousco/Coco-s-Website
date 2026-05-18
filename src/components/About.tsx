import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "./LanguageContext";
import PixelBackground from "./PixelBackground";

import Globe from "./Globe";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <PixelBackground />
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-pop-yellow p-8 md:p-12 border-8 border-ink rounded-[4rem] shadow-[16px_16px_0px_0px_#2B2B2B] flex-1"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-ink">
            {t.about.title}
          </h2>
          <p className="text-xl md:text-2xl font-bold leading-relaxed text-ink/80 whitespace-pre-line">
            {t.about.description}
          </p>
          
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
             {["Playful", "Colorful", "Bold", "Creative"].map((trait, index) => (
               <motion.div
                 key={trait}
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: index * 0.1 }}
                 className="bg-white border-4 border-ink p-4 rounded-3xl text-center font-black text-pop-purple"
               >
                 {trait}
               </motion.div>
             ))}
          </div>
        </motion.div>
        
        <div className="relative shrink-0 w-64 h-64 md:w-80 md:h-80 lg:mt-[-100px]">
          <Globe isDecorative />
        </div>
      </div>
    </section>
  );
}
