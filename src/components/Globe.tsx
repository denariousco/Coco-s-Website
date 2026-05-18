import React from "react";
import { motion } from "motion/react";

interface GlobeProps {
  isDecorative?: boolean;
}

export default function Globe({ isDecorative = false }: GlobeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={isDecorative ? "w-full h-full relative" : "absolute right-[10%] top-[30%] w-48 h-48 md:w-80 md:h-80 z-20 hidden lg:block"}
    >
      <div className="relative w-full h-full rounded-full border-8 border-ink overflow-hidden bg-white shadow-[12px_12px_0px_0px_#2B2B2B]">
        {/* Ocean Background */}
        <div className="absolute inset-0 bg-pop-purple/20" />
        
        {/* Moving Continents - Simple stylized blobs */}
        <motion.div
          animate={{ x: [-100, 200] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center"
        >
          <div className="flex space-x-12 shrink-0">
            {/* Continental Cluster 1 */}
            <div className="relative w-32 h-24 bg-pop-yellow border-4 border-ink rounded-full -rotate-12 translate-y-4" />
            <div className="relative w-16 h-16 bg-pop-pink border-4 border-ink rounded-full translate-y-12" />
            <div className="relative w-24 h-32 bg-pop-yellow border-4 border-ink rounded-full rotate-45 -translate-y-8" />
            
            {/* Continental Cluster 2 (for seamless loop) */}
            <div className="relative w-32 h-24 bg-pop-yellow border-4 border-ink rounded-full -rotate-12 translate-y-4" />
            <div className="relative w-16 h-16 bg-pop-pink border-4 border-ink rounded-full translate-y-12" />
            <div className="relative w-24 h-32 bg-pop-yellow border-4 border-ink rounded-full rotate-45 -translate-y-8" />
          </div>
        </motion.div>

        {/* Atmosphere/Glow Lines */}
        <div className="absolute top-4 left-1/4 w-1/2 h-2 bg-white/40 rounded-full blur-sm" />
      </div>

      {/* Decorative Stars around the globe */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -top-8 -right-8 w-12 h-12 bg-pop-pink border-4 border-ink flex items-center justify-center rotate-12"
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>
      
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute -bottom-4 -left-12 w-10 h-10 bg-pop-yellow border-4 border-ink flex items-center justify-center -rotate-12"
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>
    </motion.div>
  );
}
