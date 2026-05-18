import React from "react";
import { motion } from "motion/react";
import { Mail, Instagram, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/denarious_co/" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/wanjing-su-956a27405/?skipRedirect=true" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/yolingjun_" },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-pop-blue/10">
      <div className="max-w-7xl mx-auto w-full bg-white border-8 border-ink p-12 md:p-20 rounded-[4rem] shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        {/* Pattern background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '24px 24px' }} />
        
        <div className="grid md:grid-cols-2 gap-20 relative z-10">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black leading-none mb-12"
            >
              {t.contact.title} <span className="text-pop-yellow inline-block animate-bounce">👋</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-ink/70 font-medium max-w-sm mb-12"
            >
              {t.contact.subtitle}
            </motion.p>
          </div>

          <div className="flex flex-col justify-between py-4">
            <div className="space-y-12">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-widest font-black text-pop-purple">
                  {t.contact.email}
                </p>
                <a
                  href="mailto:denariousco@gmail.com"
                  className="group flex items-center space-x-4 text-3xl md:text-5xl font-black hover:text-pop-pink transition-all break-all"
                >
                  <span>denariousco@gmail.com</span>
                  <ArrowUpRight className="w-10 h-10 group-hover:scale-125 transition-transform" />
                </a>
              </div>

              <div className="space-y-4">
                <p className="text-sm uppercase tracking-widest font-black text-pop-purple">
                  {t.contact.social}
                </p>
                <div className="flex flex-wrap gap-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="group flex items-center space-x-3 bg-white border-4 border-ink px-6 py-3 rounded-2xl shadow-[4px_4px_0px_0px_#2B2B2B] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                    >
                      <social.icon className="w-5 h-5 text-pop-purple" />
                      <span className="font-black">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-xs font-black opacity-30 mt-20">
              © 2026 COCO DENARIOUS. MADE WITH ❤️.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
