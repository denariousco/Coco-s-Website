/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { LanguageProvider } from "./components/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        
        {/* Decorative elements */}
        <div className="fixed top-0 right-0 w-1/3 h-screen bg-ink/[0.02] pointer-events-none -z-10" />
        <div className="fixed bottom-0 left-0 w-64 h-64 border-l border-b border-ink/5 pointer-events-none -z-10 ml-12 mb-12" />
      </div>
    </LanguageProvider>
  );
}
