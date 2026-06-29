import React from 'react';
import { motion } from 'motion/react';

export function Philosophy() {
  const words = [
    "We", "don't", "just", "build", "software.",
    "We", "build", "experiences.",
    "We", "build", "solutions.",
    "We", "build", "the", "future."
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center z-10 text-white px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-7xl font-black leading-tight tracking-tight flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-y-6">
          {words.map((word, index) => (
            <motion.span
              variants={child}
              key={index}
              className={`${
                word.includes('experiences') || word.includes('solutions') || word.includes('future') 
                  ? 'bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500' 
                  : 'text-white/90'
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h2>
      </motion.div>
    </section>
  );
}
