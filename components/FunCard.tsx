import React, { useState, useEffect } from 'react';
import { Minus, Plus } from 'lucide-react';

const challenges = [
  "Chat teman random: 'Aku tau rahasiamu...'",
  "Update Story: Foto jempol kaki, caption 'Mood'.",
  "VN ke grup: Nyanyi 'Balonku Ada Lima' versi Rock.",
  "Push up 10x di tempat kamu berdiri sekarang!",
  "Chat mantan/crush: 'Kucingku kangen kamu'.",
  "Ngomong pake akhiran 'miaw' selama 5 menit.",
  "Selfie muka aib, kirim ke teman terdekat.",
  "Teriak 'AKU WIBU' sekencang mungkin.",
  "Tahan napas 30 detik (hati-hati pingsan).",
  "Joget TikTok tanpa musik sekarang juga.",
  "Chat teman: 'Pinjem 100k besok ganti' (Prank).",
  "Ganti PP WA jadi foto KTP/SIM selama 1 jam.",
  "Ketawa jahat durasi 10 detik non-stop.",
  "Gombalin benda mati di depanmu sekarang.",
  "Tulis status: 'Lagi open BO (Bantu Orang)'.",
  "Telepon teman, ngomong pake bahasa alien.",
  "Acting nangis di depan cermin 1 menit."
];

const FunCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentChallenge, setCurrentChallenge] = useState("Klik Generate!");
  const [gachaCount, setGachaCount] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  // Counter logic
  const increment = () => setGachaCount(prev => Math.min(prev + 1, 10));
  const decrement = () => setGachaCount(prev => Math.max(prev - 1, 1));

  // Gacha logic
  const handleGenerate = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    // Ensure card is flipped open to show the animation
    if (!isFlipped) setIsFlipped(true);

    let count = 0;
    const maxSteps = gachaCount; // Determines how many times it changes visually
    
    // We want a clear interval that feels like a machine cycling
    const interval = setInterval(() => {
      // Pick a random challenge
      const randomIndex = Math.floor(Math.random() * challenges.length);
      setCurrentChallenge(challenges[randomIndex]);
      
      count++;
      
      // Stop after N updates
      if (count >= maxSteps) {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 250); // Speed of the gacha shuffle
  };

  const handleCardClick = () => {
    // Only allow manual flipping if not currently running the gacha
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      
      {/* CARD COMPONENT */}
      <div className={`fc-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
        <div className="fc-content">
          
          {/* Back (Cover) */}
          <div className="fc-back">
            <div className="fc-back-content">
              <span className="animate-pulse">KLIK</span>
              <span className="text-xs font-normal opacity-50 tracking-normal capitalize mt-[-20px]">
                Berani Gak?
              </span>
            </div>
          </div>

          {/* Front (Result) */}
          <div className="fc-front">
            <div className="fc-circle" id="fc-bottom"></div>
            <div className="fc-circle" id="fc-right"></div>
            
            <div className="fc-front-content">
              <div className="fc-description">
                <div className="fc-title">
                  <p className={`text-center text-sm md:text-base transition-all duration-100 ${isAnimating ? 'blur-[1px]' : ''}`}>
                    {currentChallenge}
                  </p>
                </div>
                {!isAnimating && (
                   <div className="text-[10px] text-center mt-3 text-white/50">
                     (Tutup & buka atau klik generate lagi)
                   </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CONTROLS (Counter & Button) */}
      <div className="flex flex-col items-center gap-2 z-50">
        
        {/* Counter UI */}
        <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          <button 
            onClick={decrement}
            disabled={isAnimating || gachaCount <= 1}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition disabled:opacity-30"
          >
            <Minus size={14} />
          </button>
          
          <span className="text-xl font-bold font-mono min-w-[20px] text-center">
            {gachaCount}
          </span>
          
          <button 
            onClick={increment}
            disabled={isAnimating || gachaCount >= 10}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition disabled:opacity-30"
          >
            <Plus size={14} />
          </button>
        </div>

        {/* Generate Button using requested CSS */}
        <button 
          className="gradient-button"
          onClick={handleGenerate}
          disabled={isAnimating}
        >
          <span className="gradient-text">
            {isAnimating ? 'Rolling...' : 'Generate Challenge'}
          </span>
        </button>

      </div>
    </div>
  );
};

export default FunCard;