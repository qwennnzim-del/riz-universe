import React from 'react';
import { motion } from 'framer-motion';

const Achievements: React.FC = () => {
  const cards = [
    {
      id: 1,
      title: "Low Code Engineer",
      subtitle: "Professional Certification",
      // Pastikan file ini ada di: public/Achievements/sertificate1.png
      image: "/Achievements/sertificate1.png",
      fallback: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      desc: "Mastery in rapid application development and system architecture.",
      color: "hover:border-blue-500/50",
      glow: "hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]"
    },
    {
      id: 2,
      title: "Peking University HSK 1",
      subtitle: "中文 (Chinese Proficiency)",
      // Pastikan file ini ada di: public/Achievements/university.png
      image: "/Achievements/university.png",
      fallback: "https://images.unsplash.com/photo-1515169273894-7e876dcf15ea?auto=format&fit=crop&q=80&w=800",
      desc: "Foundational mastery of Mandarin Chinese language and culture.",
      color: "hover:border-purple-500/50",
      glow: "hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)]"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 flex items-end gap-4"
        >
             <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight leading-none">
            ACHIEVEMENTS
          </h2>
          <span className="font-serif-accent text-gray-500 italic text-xl mb-2">The Flex</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`group relative flex flex-col overflow-hidden border border-white/10 bg-white/5 rounded-2xl backdrop-blur-sm transition-all duration-500 ${card.color} ${card.glow}`}
            >
              {/* Certificate Image Container */}
              <div className="w-full h-64 overflow-hidden relative">
                {/* Overlay for inactive state */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10" />
                
                <img 
                  src={card.image} 
                  alt={card.title}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (card.fallback) {
                        target.src = card.fallback;
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow justify-between relative z-20">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight mb-2 text-gray-200 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-serif-accent italic text-gray-400 text-lg mb-6">
                    {card.subtitle}
                  </p>
                </div>
                
                <div className="mt-auto pt-6 border-t border-white/5">
                   <p className="text-sm text-gray-500 leading-relaxed uppercase tracking-widest">
                    {card.desc}
                   </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;