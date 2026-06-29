import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Play } from 'lucide-react';

const projects = [
  {
    title: "Taara",
    tagline: "Stream Movies, TV Shows & Anime",
    description: "A modern entertainment platform focused on smooth streaming and immersive viewing experience.",
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30"
  },
  {
    title: "Foundation Edge Institute",
    tagline: "Built for Foundation Students",
    description: "An educational platform created to simplify learning, organize study materials, and support students preparing for competitive exams.",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30"
  },
  {
    title: "Ad Free Entertainment",
    tagline: "Entertainment Without Distractions",
    description: "A platform designed to provide a clean and uninterrupted viewing experience.",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30"
  },
  {
    title: "ViewTube X",
    tagline: "Next Generation Video Experience",
    description: "A modern video platform emphasizing speed, simplicity, and user-friendly design.",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30"
  }
];

export function Projects() {
  return (
    <section className="relative py-32 z-10 text-white px-6 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className={`p-8 rounded-3xl bg-gradient-to-br ${project.color} border ${project.borderColor} backdrop-blur-xl group cursor-pointer overflow-hidden relative`}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">{project.title}</h3>
              <p className="text-cyan-400 font-medium tracking-wide text-sm uppercase mb-4">{project.tagline}</p>
              <p className="text-gray-300 leading-relaxed mb-8">{project.description}</p>
              
              <div className="flex items-center text-sm font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <Play className="w-4 h-4 mr-2" /> Explore Project
              </div>
            </div>
            
            {/* Decorative glares */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
