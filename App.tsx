import React from 'react';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';

const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-[#0a0a0a] text-[#ededed] selection:bg-blue-500 selection:text-white">
      <Hero />
      <ProjectSection />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 mt-20">
        <p className="font-serif-accent text-sm text-gray-500 italic">
          © {new Date().getFullYear()} Fariz Universe. All systems normal.
        </p>
      </footer>
    </main>
  );
};

export default App;