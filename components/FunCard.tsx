import React, { useState } from 'react';

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
  const [currentChallenge, setCurrentChallenge] = useState(challenges[0]);

  const handleClick = () => {
    // If currently open (flipped), and user clicks to close:
    // We prepare a NEW random challenge for the NEXT time they open it.
    if (isFlipped) {
      const randomIndex = Math.floor(Math.random() * challenges.length);
      // Ensure it's not the exact same challenge to keep it fresh
      let newChallenge = challenges[randomIndex];
      if (newChallenge === currentChallenge) {
         const nextIndex = (randomIndex + 1) % challenges.length;
         newChallenge = challenges[nextIndex];
      }
      
      // We set timeout to change text only after card is closed (approx 300ms transition)
      // so the user doesn't see the text swap while it's flipping back.
      setTimeout(() => {
        setCurrentChallenge(newChallenge);
      }, 300);
    }

    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`fc-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="fc-content">
        
        {/* The "Back" Face (Visible Initially) */}
        <div className="fc-back">
          <div className="fc-back-content">
            <span className="animate-pulse">KLIK</span>
            <span className="text-xs font-normal opacity-50 tracking-normal capitalize mt-[-20px]">Berani Gak?</span>
          </div>
        </div>

        {/* The "Front" Face (Hidden Initially, Revealed on Click) */}
        <div className="fc-front">
          <div className="fc-circle" id="fc-bottom"></div>
          <div className="fc-circle" id="fc-right"></div>
          
          <div className="fc-front-content">
            <div className="fc-description">
              <div className="fc-title">
                <p className="text-center text-sm md:text-base">{currentChallenge}</p>
              </div>
              <div className="text-[10px] text-center mt-3 text-white/50">
                 (Klik lagi ganti tantangan)
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FunCard;