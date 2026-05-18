import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { cn } from "../lib/utils";
import { Language } from "../i18n";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "jp", label: "JP" },
    { code: "cn", label: "CN" },
  ];

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] max-w-4xl",
        scrolled ? "top-4" : "top-8"
      )}
    >
      <div className={cn(
        "bg-white border-4 border-ink rounded-[2rem] px-6 py-3 flex items-center justify-between shadow-[8px_8px_0px_0px_#2B2B2B] transition-all",
        scrolled && "shadow-[4px_4px_0px_0px_#2B2B2B]"
      )}>
        <motion.a
          href="#home"
          whileHover={{ scale: 1.1, rotate: -5 }}
          className="text-2xl font-black tracking-tighter text-pop-purple"
        >
          COCO!
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-black hover:text-pop-pink transition-colors px-2 py-1"
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center space-x-1 bg-ink/5 p-1 rounded-2xl border-2 border-ink">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={cn(
                  "text-[10px] font-black px-3 py-1 rounded-xl transition-all",
                  language === lang.code ? "bg-pop-yellow text-ink border-2 border-ink" : "hover:bg-white/50"
                )}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 bg-pop-pink rounded-xl border-2 border-ink" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 20 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute top-full left-0 right-0 bg-pop-yellow border-4 border-ink p-8 rounded-[2.5rem] shadow-[12px_12px_0px_0px_#2B2B2B] md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-6 border-t-4 border-ink flex items-center space-x-4">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "text-sm font-black py-2 px-4 border border-ink",
                      language === lang.code ? "bg-pop-purple text-white shadow-[4px_4px_0px_0px_#2B2B2B]" : "bg-white text-ink"
                    )}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
