import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Award, Landmark } from 'lucide-react';

const ProjectSection: React.FC = () => {
  const [isTorchOn, setIsTorchOn] = useState(false);

  // Items with hex colors for the CSS variables
  const items = [
    {
      id: "hezell",
      type: "project",
      title: "Hezell.Space",
      subtitle: "Jakarta, Indonesia",
      desc: "Integrasi logika AI dengan Google Search untuk web yang lebih cerdas.",
      image: "/Achievements/thumbnail-hezell.png", 
      fallback: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
      link: "https://hezell-inc.vercel.app/",
      hex: "#3b82f6", // Blue
      glow: "rgba(59,130,246,0.3)"
    },
    {
      id: "alibaba-org",
      type: "organization",
      title: "Alibaba Cloud",
      subtitle: "Shanghai, China",
      image: "/Achievements/thumbnail-alibaba.jpeg",
      fallback: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      desc: "Mitra penyedia layanan cloud global untuk arsitektur sistem terdistribusi.",
      hex: "#f97316", // Orange
      glow: "rgba(249,115,22,0.3)"
    },
    {
      id: "lowcode-cert",
      type: "certificate",
      title: "Low Code Engineer",
      subtitle: "Shanghai, China",
      image: "/Achievements/sertificate-low-code.png",
      fallback: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      desc: "Sertifikasi resmi dalam pengembangan aplikasi cepat dan arsitektur sistem.",
      hex: "#06b6d4", // Cyan
      glow: "rgba(6,182,212,0.3)"
    },
    {
      id: "peking-org",
      type: "organization",
      title: "Peking University",
      subtitle: "Shanghai, China",
      image: "/Achievements/thumbnail-peking.png",
      fallback: "https://images.unsplash.com/photo-1548003693-547c8960e190?auto=format&fit=crop&q=80&w=800",
      desc: "Universitas bergengsi di China, tempat perjalanan bahasa Mandarin dimulai.",
      hex: "#ef4444", // Red
      glow: "rgba(239,68,68,0.3)"
    },
    {
      id: "peking-cert",
      type: "certificate",
      title: "HSK Level 1",
      subtitle: "Shanghai, China",
      image: "/Achievements/sertificate-peking.png",
      fallback: "https://images.unsplash.com/photo-1515169273894-7e876dcf15ea?auto=format&fit=crop&q=80&w=800",
      desc: "Sertifikasi resmi HSK 1 dari Peking University untuk kemampuan dasar Mandarin.",
      hex: "#a855f7", // Purple
      glow: "rgba(168,85,247,0.3)"
    }
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'project': return <Sparkles size={16} />;
      case 'certificate': return <Award size={16} />;
      case 'organization': return <Landmark size={16} />;
      default: return <Sparkles size={16} />;
    }
  };

  return (
    <section className="min-h-screen py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Torch Switch Positioning */}
        <div className="absolute top-10 right-6 md:right-12 z-50 scale-75 origin-top-right">
            <label className="torch-container">
                <input 
                    type="checkbox" 
                    checked={isTorchOn}
                    onChange={(e) => setIsTorchOn(e.target.checked)}
                />
                <div className="torch-main">
                    <div className="torch-head">
                        <div className="torch-face torch-top">
                            <div></div><div></div><div></div><div></div>
                        </div>
                        <div className="torch-face torch-left">
                            <div></div><div></div><div></div><div></div>
                        </div>
                        <div className="torch-face torch-right">
                            <div></div><div></div><div></div><div></div>
                        </div>
                    </div>
                    <div className="torch-stick">
                        <div className="torch-side torch-side-left">
                            <div></div><div></div><div></div><div></div>
                            <div></div><div></div><div></div><div></div>
                            <div></div><div></div><div></div><div></div>
                            <div></div><div></div><div></div><div></div>
                        </div>
                        <div className="torch-side torch-side-right">
                            <div></div><div></div><div></div><div></div>
                            <div></div><div></div><div></div><div></div>
                            <div></div><div></div><div></div><div></div>
                            <div></div><div></div><div></div><div></div>
                        </div>
                    </div>
                </div>
            </label>
        </div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end gap-4 border-b border-white/5 pb-8"
        >
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-tight leading-none text-white">
            WORK & <span className="text-gray-500">ACHIEVEMENTS</span>
          </h2>
          <span className="font-serif-accent text-blue-400 italic text-xl mb-1 md:ml-auto">
            Selected Portfolio
          </span>
        </motion.div>

        {/* Unified Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: -100 }} // Starts from top (negative Y)
              whileInView={{ opacity: 1, y: 0 }} // Moves to natural position
              transition={{ delay: index * 0.15, duration: 1.0, ease: "easeOut" }} // Slow duration (1s)
              viewport={{ once: true }}
              className={`uv-parent ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div 
                className={`uv-card ${isTorchOn ? 'uv-card-glow-active' : ''}`}
                // @ts-ignore
                style={{
                  '--theme-color': item.hex,
                  '--theme-glow': item.glow
                }}
              >
                {/* Logo / Circles */}
                <div className="uv-logo">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="circle circle3"></span>
                  <span className="circle circle4"></span>
                  <div className="circle circle5">
                    {getIcon(item.type)}
                  </div>
                </div>

                {/* Glass Overlay */}
                <div className="uv-glass"></div>

                {/* Content */}
                <div className="uv-content">
                  {/* Image */}
                  <div className="uv-image-container">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (item.fallback) {
                            target.src = item.fallback;
                        }
                      }}
                    />
                  </div>

                  <span className="uv-title">{item.title}</span>
                  <span className="uv-subtitle">{item.subtitle}</span>
                  <span className="uv-text">{item.desc}</span>
                </div>

                {/* Bottom Actions */}
                <div className="uv-bottom">
                  {item.link ? (
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="launch-button"
                    >
                      <span className="launch-text">Launch <ExternalLink size={14} /></span>
                      <div className="launch-hoverEffect">
                        <div></div>
                      </div>
                    </a>
                  ) : (
                    <div className="uv-view-more">
                       <span className="uv-view-more-button" style={{cursor: 'default', opacity: 0.7}}>
                         VERIFIED
                       </span>
                    </div>
                  )}
                  
                  {/* Decorative social-like dots */}
                  <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-white/20"></div>
                     <div className="w-2 h-2 rounded-full bg-white/40"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;