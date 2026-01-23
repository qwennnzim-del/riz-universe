import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Brain, Sparkles, Cpu, MessageSquare, Zap, Globe } from 'lucide-react';

const AIPlatforms: React.FC = () => {
  const platforms = [
    { name: 'Gemini', color: '66, 133, 244', icon: <Sparkles size={40} /> }, // Blue
    { name: 'Deepseek', color: '20, 20, 200', icon: <Brain size={40} /> }, // Deep Blue
    { name: 'Manus AI', color: '16, 185, 129', icon: <Cpu size={40} /> }, // Greenish
    { name: 'Meta AI', color: '6, 104, 225', icon: <Globe size={40} /> }, // Meta Blue
    { name: 'ChatGPT', color: '116, 170, 156', icon: <MessageSquare size={40} /> }, // OpenAI Green
    { name: 'Monica AI', color: '139, 92, 246', icon: <Bot size={40} /> }, // Purple
    { name: 'Hezell.AI', color: '245, 158, 11', icon: <Zap size={40} /> } // Gold/Orange
  ];

  return (
    <section className="h-[500px] w-full relative bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center py-20">
      
      {/* Section Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute top-10 z-10 text-center"
      >
        <span className="font-serif-accent text-blue-400 italic text-lg">Powered By</span>
        <h3 className="text-3xl font-bold text-white tracking-tight">INTELLIGENCE ECOSYSTEM</h3>
      </motion.div>

      {/* 3D Carousel */}
      <div 
        className="ai-carousel-wrapper" 
        // @ts-ignore
        style={{ '--quantity': platforms.length }}
      >
        <div className="ai-carousel-inner">
          {platforms.map((platform, index) => (
            <div 
              key={platform.name}
              className="ai-carousel-card"
              // @ts-ignore
              style={{ 
                '--index': index + 1,
                '--color-card': platform.color
              }}
            >
              <div className="ai-carousel-img">
                 {/* Icon acting as Logo */}
                 <div className="mb-2 opacity-90">
                    {platform.icon}
                 </div>
                 <span className="ai-carousel-text">{platform.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default AIPlatforms;