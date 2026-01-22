import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text & Quote Area */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Quote className="text-blue-500 w-10 h-10 mb-6 rotate-180" />
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Building the future, <br />
                <span className="font-serif-accent italic text-gray-400">one line at a time.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed text-lg">
                Fueling creativity with code and logic. Whether it's crafting low-code solutions, diving into AI integration, or learning a new language, I'm always optimizing the system.
              </p>
            </motion.div>
          </div>

          {/* Spotify / Vibe Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full aspect-square max-w-sm mx-auto bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center relative overflow-hidden shadow-2xl"
          >
             {/* Fake Spotify UI */}
             <div className="w-full h-full flex flex-col items-center justify-center gap-4 z-10">
                <div className="w-32 h-32 bg-gray-800 rounded-lg shadow-lg animate-pulse" />
                <div className="text-center space-y-2">
                    <div className="h-4 w-32 bg-gray-800 rounded mx-auto" />
                    <div className="h-3 w-20 bg-gray-800 rounded mx-auto" />
                </div>
                <div className="flex gap-4 mt-4">
                    <div className="w-8 h-8 rounded-full bg-gray-800" />
                    <div className="w-8 h-8 rounded-full bg-white/20" />
                    <div className="w-8 h-8 rounded-full bg-gray-800" />
                </div>
                <p className="absolute bottom-6 text-xs text-green-500 uppercase tracking-widest font-bold">Currently Jamming</p>
             </div>
             
             {/* Glow effect */}
             <div className="absolute inset-0 bg-green-500/5 blur-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;