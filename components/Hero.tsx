import React from 'react';
import { motion } from 'framer-motion';
import FunCard from './FunCard';

const Hero: React.FC = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Glow removed to allow Aurora to show */}
      
      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center px-4"
      >
        <p className="font-serif-accent italic text-xl md:text-2xl text-gray-400 mb-4 tracking-widest">
          The Portfolio of
        </p>
        <h1 className="font-black tracking-tighter leading-[0.9] text-[clamp(4rem,15vw,12rem)] bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
          M. FARIZ
        </h1>
      </motion.div>

      {/* Fun Card - Strategic Placement */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-32 right-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-16 z-30 hidden md:block"
      >
        <FunCard />
      </motion.div>

      {/* Mobile Fun Card Position (Below title, above marquee) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="md:hidden mt-8 z-30 mb-20 scale-75"
      >
          <FunCard />
      </motion.div>

      {/* Marquee */}
      <div className="absolute bottom-12 w-full overflow-hidden border-t border-b border-white/10 py-4 bg-[#0a0a0a]/80 backdrop-blur-sm z-20">
        <motion.div
          className="flex whitespace-nowrap"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 font-bold text-lg md:text-xl tracking-widest text-blue-400/80">
              LOW CODE ENGINEER • AI WEB DEVELOPMENT • MANDARIN LEARNER •
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;