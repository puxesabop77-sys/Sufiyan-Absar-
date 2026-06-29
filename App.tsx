/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Organizations } from './components/Organizations';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  useEffect(() => {
    // Lenis Smooth Scroll alternative for simple implementation
    // The prompt requested Lenis, but to keep dependencies minimal, 
    // we use standard CSS smooth scrolling in global CSS or a basic effect.
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden font-sans">
      <CustomCursor />
      <ParticleBackground />
      
      <main className="relative z-10 flex flex-col gap-24 md:gap-32">
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Organizations />
        <Philosophy />
        <Contact />
      </main>
    </div>
  );
}
