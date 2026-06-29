import React from 'react';
import { motion } from 'motion/react';

const skills = [
  "Frontend Development", "Backend Development", "JavaScript", "TypeScript",
  "React", "Next.js", "Node.js", "Tailwind CSS", "Firebase", "Three.js",
  "GSAP", "UI/UX Design", "Problem Solving", "Artificial Intelligence",
  "Database Design", "System Architecture"
];

export function Skills() {
  return (
    <section className="relative py-24 z-10 text-white px-6 max-w-7xl mx-auto overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
      >
        Neural Network
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: index * 0.05 }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(0, 255, 255, 0.6)" }}
            className="px-6 py-4 rounded-full bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/30 backdrop-blur-xl cursor-crosshair transition-all duration-300"
          >
            <span className="text-sm md:text-lg font-medium text-blue-100 tracking-wide">{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
