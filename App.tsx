import React from 'react';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import EmojiRainButton from './components/EmojiRainButton';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full relative text-[#ededed] selection:bg-blue-500 selection:text-white overflow-hidden">
      {/* Full Color Background (Cyan to Purple) */}
      <div className="full-color-bg fixed inset-0 z-0"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <ProjectSection />
        
        {/* Footer */}
        <footer className="py-8 text-center border-t border-white/5 mt-20">
          <p className="font-serif-accent text-sm text-gray-500 italic">
            © {new Date().getFullYear()} Fariz Universe. All systems normal.
          </p>
        </footer>
      </div>

      {/* Floating Emoji Rain Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <EmojiRainButton />
      </div>
    </main>
  );
};

export default App;