import React from 'react';
import { motion } from 'framer-motion';

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
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

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