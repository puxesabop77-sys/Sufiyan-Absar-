import React from 'react';
import { motion } from 'motion/react';
import { Code, Users, MonitorSmartphone, BrainCircuit } from 'lucide-react';

const stats = [
  { label: 'Projects Built', value: '50+', icon: Code },
  { label: 'Platforms Developed', value: '15+', icon: MonitorSmartphone },
  { label: 'Happy Users', value: '10K+', icon: Users },
  { label: 'Years of Learning', value: '7+', icon: BrainCircuit },
];

export function About() {
  return (
    <section className="relative min-h-screen py-24 z-10 text-white flex flex-col justify-center px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            About the Visionary
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl font-light">
          A passionate builder creating impactful digital products across education, technology, hospitality, and entertainment. 
          Focused on solving real-world problems through elegant software, seamless user experience, and relentless innovation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <stat.icon className="w-10 h-10 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-5xl font-bold text-white mb-2">{stat.value}</h3>
            <p className="text-gray-400 uppercase tracking-wider text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
