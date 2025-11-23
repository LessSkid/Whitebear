import React from 'react';
import { motion } from 'framer-motion';

// --- Shared Components ---

export const StarSVG = ({ className, color = "currentColor" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill={color} style={{ overflow: 'visible' }}>
    <path d="M50 0 C50 0 60 40 100 50 C60 40 50 100 50 100 C50 100 40 60 0 50 C40 60 50 0 50 0 Z" stroke="black" strokeWidth="3" />
  </svg>
);

export const Sticker = ({ children, className, rotation = 0 }: { children?: React.ReactNode, className?: string, rotation?: number }) => (
  <motion.div 
    initial={{ rotate: rotation }}
    whileHover={{ scale: 1.1, rotate: rotation + 5 }}
    className={`absolute select-none pointer-events-auto filter drop-shadow-md z-20 ${className}`}
  >
    <div className="bg-white border-2 border-white p-1 rounded shadow-sm">
        {children}
    </div>
  </motion.div>
);

// --- Background Specific Shapes ---

const Squiggle = ({ className, color = "black" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 200 50" className={className} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round">
    <path d="M5 25 Q 50 5 100 25 T 195 25" />
  </svg>
);

const Loop = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 300 150" className={className} fill="none" stroke="black" strokeWidth="3" strokeDasharray="10 10">
    <path d="M10 75 Q 75 0 150 75 T 290 75" />
  </svg>
);

const Blob = ({ className, color = "#eee" }: { className?: string, color?: string }) => (
     <svg viewBox="0 0 200 200" className={className} fill={color}>
        <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,85.8,-8.3C81.5,3.8,70.2,13.7,60.2,22.9C50.2,32.1,41.5,40.6,31.8,49.2C22.1,57.8,11.3,66.5,0.7,65.3C-9.9,64.1,-19.2,53,-29.6,44.9C-40,36.8,-51.5,31.7,-61.8,22.6C-72.1,13.5,-81.2,0.4,-78.9,-11.1C-76.6,-22.6,-62.9,-32.5,-50.7,-40.4C-38.5,-48.3,-27.8,-54.2,-16.3,-60.8C-4.8,-67.4,7.5,-74.7,21.5,-78.1L30.5,-83.6" transform="translate(100 100)" stroke="black" strokeWidth="2" />
    </svg>
);

const Y2KDecorations: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fffdf5]">
      {/* 1. Dot Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} 
      />

      {/* 2. Large Abstract Shapes (Blobs) */}
      <Blob className="absolute top-[5%] right-[10%] w-[30vw] max-w-[300px] text-yellow-100 opacity-60 mix-blend-multiply" color="#fef08a" />
      <Blob className="absolute bottom-[10%] left-[5%] w-[40vw] max-w-[400px] text-blue-100 opacity-60 mix-blend-multiply rotate-90" color="#dbeafe" />
      <Blob className="absolute top-[40%] left-[15%] w-[20vw] max-w-[200px] text-pink-100 opacity-60 mix-blend-multiply -rotate-45" color="#fce7f3" />

      {/* 3. Linear Elements (Loops & Squiggles) */}
      <Loop className="absolute top-[8%] left-[-5%] w-[40vw] max-w-[500px] opacity-20 rotate-6" />
      <Loop className="absolute bottom-[5%] right-[-5%] w-[50vw] max-w-[600px] opacity-20 -rotate-3" />
      
      <Squiggle className="absolute top-[20%] right-[15%] w-32 md:w-48 text-pink-400 rotate-12 opacity-80" color="#ff70a6" />
      <Squiggle className="absolute bottom-[25%] left-[8%] w-40 text-cyan-400 -rotate-6 opacity-80" color="#22d3ee" />

      {/* 4. Floating Elements (Balls & Stars) */}
       {/* Blue Ball */}
       <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[15%] left-[5%] md:left-[10%] w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold font-sans border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
       >
          7
       </motion.div>

       {/* Green Ball */}
       <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[35%] right-[5%] w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold font-sans border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
       >
          0
       </motion.div>

       {/* Pink Ball */}
       <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[15%] left-[10%] md:left-[20%] w-14 h-14 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold font-sans border-2 border-black text-xl shadow-[4px_4px_0px_rgba(0,0,0,1)]"
       >
          1
       </motion.div>

       <StarSVG className="absolute bottom-[20%] right-[15%] w-24 h-24 text-yellow-400 rotate-12 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" color="#FACC15" />
       <StarSVG className="absolute top-[20%] left-[20%] w-12 h-12 text-cyan-400 -rotate-12 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" color="#22d3ee" />
    </div>
  );
};

export default Y2KDecorations;