import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

export function Contact() {
  return (
    <section className="relative py-32 z-10 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 md:p-16 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-2xl relative overflow-hidden text-center"
        >
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/30 rounded-full blur-[100px]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Let's Build the Future</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Open to new opportunities, collaborations, and conversations.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
              <a href="mailto:contact@sufiyanabsar.com" className="group flex items-center justify-center px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-cyan-400 transition-colors duration-300 w-full md:w-auto">
                Start a Conversation <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex items-center justify-center gap-8">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Mail, href: "mailto:contact@sufiyanabsar.com" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        
        <div className="text-center mt-20 text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Sufiyan Absar. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
