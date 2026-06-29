import React from 'react';
import { motion } from 'motion/react';

const milestones = [
  { year: "2018", title: "The Beginning", description: "Wrote the first lines of code. Ignited a lifelong passion for building." },
  { year: "2020", title: "First Platform", description: "Launched the first full-stack application, reaching initial users." },
  { year: "2022", title: "Lumivox Studios", description: "Founded a creative software studio to build innovative digital experiences." },
  { year: "2023", title: "Anti Lodge", description: "Took the helm as CEO, blending hospitality with a digital management ecosystem." },
  { year: "2024", title: "Scaling Impact", description: "Reaching thousands of users across education and entertainment platforms." },
  { year: "Present", title: "Future Innovator", description: "Continuously pushing boundaries in AI, Web3, and immersive experiences." }
];

export function Timeline() {
  return (
    <section className="relative py-24 z-10 text-white px-6 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500"
      >
        The Journey
      </motion.h2>

      <div className="relative border-l-2 border-white/10 ml-4 md:ml-1/2 space-y-16">
        {milestones.map((milestone, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative pl-10 md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-10' : 'md:ml-0 md:pr-10 md:pl-0 md:-left-[2px] md:text-right'}`}
          >
            <div className={`absolute top-0 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_15px_rgba(0,255,255,0.8)] -left-[9px] ${index % 2 === 0 ? 'md:-left-[9px]' : 'md:right-[calc(-100%-7px)] md:left-auto'}`} />
            
            <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-300 ${index % 2 === 0 ? '' : 'md:mr-10'}`}>
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-cyan-300 text-sm font-bold mb-4 tracking-wider">
                {milestone.year}
              </span>
              <h3 className="text-2xl font-bold mb-2 text-white">{milestone.title}</h3>
              <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
