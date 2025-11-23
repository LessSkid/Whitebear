import React, { useEffect, useRef } from 'react';

export type BackgroundType = 'matrix' | 'vaporwave' | 'static';

interface BackgroundEffectProps {
  type: BackgroundType;
}

const BackgroundEffect: React.FC<BackgroundEffectProps> = ({ type }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let animationId: number;

    // State storage
    const fontSize = 16;
    let columns: number;
    let drops: number[] = []; // for matrix
    let offset = 0; // for vaporwave

    // --- INITIALIZATION ---
    const init = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;

      if (type === 'matrix') {
        columns = Math.floor(w / fontSize);
        drops = [];
        for (let i = 0; i < columns; i++) {
          drops[i] = Math.random() * -100; // Start above screen
        }
      }
    };

    // --- RENDER LOOPS ---
    const drawMatrix = () => {
      // Semi-transparent black to create trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#0F0'; // Green text
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96); // Matrix characters
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > h && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const drawVaporwave = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, w, h);

      // Sun
      const gradient = ctx.createLinearGradient(w / 2, h / 2 - 100, w / 2, h / 2 + 100);
      gradient.addColorStop(0, '#ff0080');
      gradient.addColorStop(1, '#ff8c00');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, 100, 0, Math.PI * 2);
      ctx.fill();

      // Grid
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 1;
      
      const horizon = h / 2 + 50;
      const perspective = 200;

      // Vertical lines
      for (let i = -w; i < w * 2; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, h);
        ctx.lineTo((i - w / 2) / 4 + w / 2, horizon);
        ctx.stroke();
      }

      // Horizontal lines (moving)
      offset = (offset + 1) % 40;
      for (let y = horizon; y < h; y += 20 + (y - horizon) * 0.5) {
        const moveY = y + offset * ((y - horizon) / 200);
        if (moveY > h) continue;
        
        ctx.beginPath();
        ctx.moveTo(0, moveY);
        ctx.lineTo(w, moveY);
        ctx.stroke();
      }
    };

    const drawStatic = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, w, h);
      
      for (let i = 0; i < w; i += 4) {
        for (let j = 0; j < h; j += 4) {
          if (Math.random() > 0.5) {
            ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.1})`;
            ctx.fillRect(i, j, 4, 4);
          }
        }
      }
    };

    const animate = () => {
      if (type === 'matrix') drawMatrix();
      else if (type === 'vaporwave') drawVaporwave();
      else if (type === 'static') drawStatic();
      
      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    init();
    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [type]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default BackgroundEffect;