import React from 'react';
import { Sparkles } from 'lucide-react';

const EmojiRainButton: React.FC = () => {
  const emojis = ['😜', '🪷', '🥰'];

  const triggerRain = (emoji: string) => {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.pointerEvents = 'none'; // Click through
    container.style.zIndex = '9999';
    container.style.overflow = 'hidden';
    document.body.appendChild(container);

    // Create ~50 drops
    const dropCount = 50;
    for (let i = 0; i < dropCount; i++) {
      const drop = document.createElement('div');
      drop.innerText = emoji;
      drop.style.position = 'absolute';
      drop.style.left = Math.random() * 100 + 'vw';
      drop.style.top = -50 + 'px'; // Start above screen
      drop.style.fontSize = Math.random() * 20 + 20 + 'px';
      // Randomize animation duration between 2s and 3s
      drop.style.animation = `emoji-fall ${Math.random() * 1 + 2}s linear`;
      // Randomize delay slightly so they don't all start exactly at once
      drop.style.animationDelay = Math.random() * 0.5 + 's';
      
      container.appendChild(drop);
    }

    // Cleanup after 3.5 seconds
    setTimeout(() => {
      document.body.removeChild(container);
    }, 3500);
  };

  return (
    <div className="tooltip-container">
      <div className="tooltip-content">
        <div className="social-icons">
          {emojis.map((emoji, index) => (
            <div 
                key={index} 
                className="social-icon"
                onClick={() => triggerRain(emoji)}
            >
              <span>{emoji}</span>
            </div>
          ))}
        </div>
      </div>
      
      <button className="button-content">
        <span className="text">Click me</span>
        <Sparkles className="share-icon w-5 h-5" />
      </button>
    </div>
  );
};

export default EmojiRainButton;