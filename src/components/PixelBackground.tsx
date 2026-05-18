import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function PixelBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.floor(Math.random() * 3) + 5, // 5-7px (Larger)
      delay: Math.random() * 5,
      duration: Math.random() * 2 + 1, // Slightly slower for visibility
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ 
            x: `${star.x}vw`, 
            y: `${star.y}vh`, 
            opacity: 0,
            scale: 0,
            rotate: 45
          }}
          animate={{ 
            x: [`${star.x}vw`, `${star.x + 12}vw`],
            y: [`${star.y}vh`, `${star.y + 12}vh`],
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatDelay: Math.random() * 4 + 2,
            delay: star.delay,
            ease: "linear"
          }}
          className="absolute"
        >
          {/* Pixel Shooting Star Shape */}
          <div className="flex items-center">
             {/* The "Trail" - Improved visibility */}
            <div 
              style={{ width: star.size * 6, height: star.size, opacity: 0.4 }} 
              className="bg-pop-yellow rounded-full blur-[1px] -translate-x-2"
            />
            {/* The Star Body - More obvious pixel shape */}
            <div className="relative" style={{ width: star.size * 3, height: star.size * 3 }}>
              {/* Outer Glow effect */}
              <div className="absolute inset-0 bg-pop-yellow/40 blur-sm rounded-full scale-150" />
              
              <div 
                style={{ width: star.size, height: star.size }} 
                className="absolute top-0 left-1/2 -translate-x-1/2 bg-pop-yellow" 
              />
              <div 
                style={{ width: star.size, height: star.size }} 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-pop-yellow" 
              />
              <div 
                style={{ width: star.size, height: star.size }} 
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-pop-yellow" 
              />
              <div 
                style={{ width: star.size, height: star.size }} 
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-pop-yellow" 
              />
              {/* Core */}
              <div 
                style={{ width: star.size, height: star.size }} 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-[0_0_10px_white]" 
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
