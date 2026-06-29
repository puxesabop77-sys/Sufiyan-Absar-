import React from 'react';
import { motion } from 'motion/react';

const roles = [
  "Founder of Lumivox Studios",
  "CEO of Anti Lodge",
  "Educationist",
  "Full Stack Developer",
  "Creative Technologist",
  "Digital Product Builder",
  "Problem Solver",
  "Future Innovator"
];

export function Hero() {
  const [currentRole, setCurrentRole] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden z-10 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="text-center"
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          SUFIYAN ABSAR
        </motion.h1>
        
        <div className="h-16 relative overflow-hidden">
          <motion.div
            key={currentRole}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-3xl font-light tracking-wide text-cyan-200"
          >
            {roles[currentRole]}
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-sm tracking-widest text-gray-400 uppercase mb-2">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"
        />
      </motion.div>
    </section>
  );
}
