import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Building2, Home } from 'lucide-react';

const orgs = [
  {
    name: "Lumivox Studios",
    role: "Founder",
    desc: "Creative software studio building innovative digital products, applications, and experiences.",
    link: "https://lumivoxstudios.qzz.io",
    icon: Building2
  },
  {
    name: "Anti Lodge",
    role: "CEO",
    desc: "Affordable student accommodation with a growing digital ecosystem focused on simplifying hostel and lodge management.",
    link: "https://antilodge.dpdns.org",
    icon: Home
  }
];

export function Organizations() {
  return (
    <section className="relative py-24 z-10 text-white px-6 max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-20 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
      >
        Organizations
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {orgs.map((org, index) => (
          <motion.a
            href={org.link}
            target="_blank"
            rel="noopener noreferrer"
            key={org.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="group relative p-10 rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden flex flex-col items-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <org.icon className="w-10 h-10 text-yellow-400" />
            </div>
            <h3 className="text-3xl font-bold mb-2">{org.name}</h3>
            <p className="text-orange-400 font-bold tracking-widest uppercase text-sm mb-6">{org.role}</p>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">{org.desc}</p>
            
            <div className="mt-auto flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
              Visit Website <ExternalLink className="w-4 h-4 ml-2" />
            </div>
          </motion.a>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 p-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 relative"
      >
        <div className="absolute inset-0 blur-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-50" />
        <a 
          href="https://xplec-cipher-in.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative block p-12 bg-black rounded-[23px] text-center overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <h3 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-4">Portfolio</h3>
          <p className="text-3xl md:text-5xl font-bold text-white mb-6">Explore Previous Work</p>
          <div className="inline-flex items-center text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
            xplec-cipher-in.vercel.app <ExternalLink className="w-5 h-5 ml-2" />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
