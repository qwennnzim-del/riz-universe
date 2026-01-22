import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, Award, Landmark } from 'lucide-react';

const ProjectSection: React.FC = () => {
  // Definisi Item berdasarkan file yang tersedia
  const items = [
    // PROJECT: Hezell (Thumbnail)
    {
      id: "hezell",
      type: "project",
      title: "Hezell.Space",
      subtitle: "Jakarta, Indonesia",
      desc: "Integrasi logika AI dengan Google Search untuk web yang lebih cerdas.",
      image: "/Achievements/thumbnail-hezell.png", 
      fallback: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
      color: "hover:border-blue-500/50",
      glow: "hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]",
      link: "https://hezell-app.vercel.app/"
    },
    // ORGANIZATION: Alibaba Cloud (Thumbnail) - The Giver
    {
      id: "alibaba-org",
      type: "organization",
      title: "Alibaba Cloud",
      subtitle: "Shanghai, China",
      image: "/Achievements/thumbnail-alibaba.jpeg",
      fallback: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      desc: "Mitra penyedia layanan cloud global untuk arsitektur sistem terdistribusi.",
      color: "hover:border-orange-500/50",
      glow: "hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.3)]"
    },
    // CERTIFICATE: Low Code (Sertificate) - The Award
    {
      id: "lowcode-cert",
      type: "certificate",
      title: "Low Code Engineer",
      subtitle: "Shanghai, China",
      image: "/Achievements/sertificate-low-code.png",
      fallback: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      desc: "Sertifikasi resmi dalam pengembangan aplikasi cepat dan arsitektur sistem.",
      color: "hover:border-cyan-500/50",
      glow: "hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)]"
    },
    // ORGANIZATION: Peking University (Thumbnail) - The Giver
    {
      id: "peking-org",
      type: "organization",
      title: "Peking University",
      subtitle: "Shanghai, China",
      image: "/Achievements/thumbnail-peking.png",
      fallback: "https://images.unsplash.com/photo-1548003693-547c8960e190?auto=format&fit=crop&q=80&w=800",
      desc: "Universitas bergengsi di China, tempat perjalanan bahasa Mandarin dimulai.",
      color: "hover:border-red-500/50",
      glow: "hover:shadow-[0_0_30px_-10px_rgba(239,68,68,0.3)]"
    },
    // CERTIFICATE: HSK 1 (Sertificate) - The Award
    {
      id: "peking-cert",
      type: "certificate",
      title: "HSK Level 1",
      subtitle: "Shanghai, China",
      image: "/Achievements/sertificate-peking.png",
      fallback: "https://images.unsplash.com/photo-1515169273894-7e876dcf15ea?auto=format&fit=crop&q=80&w=800",
      desc: "Sertifikasi resmi HSK 1 dari Peking University untuk kemampuan dasar Mandarin.",
      color: "hover:border-purple-500/50",
      glow: "hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)]"
    }
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'project': return <Sparkles size={12} />;
      case 'certificate': return <Award size={12} />;
      case 'organization': return <Landmark size={12} />;
      default: return <Sparkles size={12} />;
    }
  };

  const getLabel = (type: string) => {
    switch(type) {
      case 'project': return 'Featured Project';
      case 'certificate': return 'Verified Certificate';
      case 'organization': return 'Organization / Issuer';
      default: return 'Portfolio Item';
    }
  };

  return (
    <section className="min-h-screen py-24 px-6 md:px-12 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`group relative flex flex-col overflow-hidden border border-white/10 bg-white/5 rounded-3xl backdrop-blur-sm transition-all duration-500 ${item.color} ${item.glow} ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              {/* Image Section */}
              <div className="w-full h-64 overflow-hidden relative">
                {/* Removed darker overlay, keeping minimal hover effect */}
                <div className="absolute inset-0 bg-transparent z-10" />
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4 z-20">
                   <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-xs tracking-widest uppercase text-white shadow-lg`}>
                      {getIcon(item.type)}
                      {getLabel(item.type)}
                   </div>
                </div>

                <img 
                  src={item.image} 
                  alt={item.title}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (item.fallback) {
                        target.src = item.fallback;
                    }
                  }}
                  // Removed grayscale and opacity classes to keep images normal/full color
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow relative z-20">
                <div className="mb-3">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-100 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-serif-accent italic text-gray-400 text-sm md:text-base mt-1">
                    {item.subtitle}
                  </p>
                </div>
                
                <p className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {item.desc}
                </p>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                   <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest group-hover:text-gray-400 transition-colors">
                      {item.type === 'project' ? 'System Status: Active' : item.type === 'organization' ? 'Official Partner' : 'Verified Credential'}
                   </span>
                   
                   {item.type === 'project' && (
                     <a 
                       href={item.link}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-xs font-bold text-white flex items-center gap-2 hover:text-blue-400 transition-colors"
                     >
                       Launch <ExternalLink size={12} />
                     </a>
                   )}
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
