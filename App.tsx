import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Minus, X, MousePointer2, PaintBucket, Eraser, Pencil, Type, Grip, Search, User } from 'lucide-react';
import LinkCard from './components/LinkCard';
import MusicPlayer from './components/MusicPlayer';
import Y2KDecorations, { Sticker } from './components/Y2KDecorations';
import { PROFILE, SOCIAL_LINKS, PLAYLIST } from './constants';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Paint Toolbar Icons
  const tools = [
    { icon: MousePointer2, active: true },
    { icon: Search, active: false },
    { icon: PaintBucket, active: false },
    { icon: Pencil, active: false },
    { icon: Eraser, active: false },
    { icon: Type, active: false },
  ];

  // Paint Color Palette
  const colors = [
    '#000000', '#808080', '#800000', '#808000', '#008000', '#008080', '#000080', '#800080', '#808040', '#004040', '#0080ff', '#004080', '#8000ff', '#804000',
    '#ffffff', '#c0c0c0', '#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#ffff80', '#00ff80', '#80ffff', '#8080ff', '#ff80ff', '#ff8040'
  ];

  return (
    <div className="min-h-screen relative font-['VT323'] flex items-center justify-center py-10 px-4 overflow-hidden">
      <Y2KDecorations />

      {/* --- MONITOR FRAME --- */}
      <div className="relative z-10 w-full max-w-4xl perspective-1000">
        
        {/* Bezel Stickers */}
        <Sticker className="-top-6 left-12 rotate-[-12deg]" rotation={-12}>
           <div className="text-xs font-bold px-2 py-1 bg-yellow-300 text-black border border-black font-sans">welcome</div>
        </Sticker>
        <Sticker className="bottom-12 -left-6 rotate-[5deg]" rotation={5}>
           <div className="w-12 h-12 bg-pink-400 rounded-full border-2 border-black flex items-center justify-center">
             <span className="text-2xl">🐻‍❄️</span>
           </div>
        </Sticker>
        <Sticker className="-right-4 top-20 rotate-[15deg]" rotation={15}>
           <div className="w-16 h-16 bg-blue-400 rounded-none border-2 border-black flex items-center justify-center">
             <span className="text-white font-bold font-sans text-center leading-none">JUST<br/>WORK</span>
           </div>
        </Sticker>
        <Sticker className="bottom-4 -right-8 rotate-[-8deg]" rotation={-8}>
           <div className="text-xs font-bold px-1 py-4 bg-green-300 text-black border border-black font-sans writing-vertical">SURPRISE</div>
        </Sticker>

        {/* Monitor Container */}
        <div className="bg-[#e6e2d6] rounded-[2rem] p-6 shadow-[20px_20px_0_rgba(0,0,0,0.15)] border-b-8 border-r-8 border-[#b8b4a8] relative">
            
            {/* Monitor Power Button & LED */}
            <div className="absolute bottom-3 right-10 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_5px_#4ade80] animate-pulse"></div>
                <div className="w-6 h-6 rounded-full bg-[#d0cdc5] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3),1px_1px_0_white] flex items-center justify-center">
                    <div className="w-2 h-2 border-2 border-gray-400 rounded-full border-t-transparent -rotate-45"></div>
                </div>
            </div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-4">
                 <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
                 <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
            </div>

            {/* SCREEN (Paint App) */}
            <div className="bg-white border-[3px] border-[#808080] rounded-[2px] h-[700px] flex flex-col shadow-inner overflow-hidden relative">
                
                {/* Title Bar */}
                <div className="bg-[#000080] h-6 flex justify-between items-center px-2 select-none">
                    <div className="flex items-center gap-2">
                         <div className="w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-600 border border-white"></div>
                         <span className="text-white text-xs font-sans font-bold tracking-wide">untitled - Paint</span>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-4 h-4 bg-[#c0c0c0] flex items-center justify-center border border-white border-b-black border-r-black">
                            <Minus size={10} className="text-black" />
                        </div>
                        <div className="w-4 h-4 bg-[#c0c0c0] flex items-center justify-center border border-white border-b-black border-r-black">
                            <X size={10} className="text-black" />
                        </div>
                    </div>
                </div>

                {/* Menu Bar */}
                <div className="bg-[#c0c0c0] px-2 py-0.5 text-[10px] text-black font-sans flex gap-3 border-b border-white">
                    <span className="underline">F</span>ile
                    <span className="underline">E</span>dit
                    <span className="underline">V</span>iew
                    <span className="underline">I</span>mage
                    <span className="underline">O</span>ptions
                    <span className="underline">H</span>elp
                </div>

                {/* Main Paint Workspace */}
                <div className="flex-1 flex bg-[#808080] p-1 gap-1 overflow-hidden">
                    
                    {/* Left Toolbar */}
                    <div className="w-8 flex flex-col gap-0.5">
                         {tools.map((t, i) => (
                             <div key={i} className={`w-full aspect-square border-t border-l border-white border-b border-r border-black flex items-center justify-center ${t.active ? 'bg-white shadow-inner border-none' : 'bg-[#c0c0c0]'}`}>
                                 <t.icon size={14} className="text-black" />
                             </div>
                         ))}
                         {/* Spacer for aesthetics */}
                         <div className="flex-1 bg-[#c0c0c0] border border-gray-500"></div>
                    </div>

                    {/* Canvas (Content Area) */}
                    <div className="flex-1 bg-white relative overflow-y-auto overflow-x-hidden border-2 border-black shadow-[inset_2px_2px_0_rgba(0,0,0,0.1)] custom-scrollbar">
                        {/* Drawn Elements (Decoration) */}
                        <div className="absolute top-4 left-4 font-['Press_Start_2P'] text-4xl text-black opacity-10 pointer-events-none select-none 0">
                           TheaTheBear
                        </div>
                        <div className="absolute top-10 right-10 rotate-12 pointer-events-none z-0">
                           <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                               <path d="M10 10 Q 50 0 90 20 T 90 80 T 10 90 T 10 10" stroke="black" strokeWidth="2" strokeDasharray="5 5" />
                           </svg>
                        </div>

                        <div className="relative z-10 p-6 md:p-10">
                            
                            {/* Hand-drawn look Profile Header */}
                            <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                                <div className="relative group">
                                    <div className="absolute -inset-2 bg-black rounded-lg rotate-2 group-hover:rotate-0 transition-transform"></div>
                                    <img 
                                      src={PROFILE.avatar} 
                                      alt="profile" 
                                      className="relative w-32 h-32 md:w-40 md:h-40 object-cover border-2 border-white bg-white"
                                    />
                                    <div className="absolute -bottom-4 -right-4 bg-yellow-300 text-black text-xs font-bold px-2 py-1 border-2 border-black rotate-[-5deg]">
                                       Bear!
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h1 className="font-['Press_Start_2P'] text-2xl md:text-4xl mb-2 text-black leading-relaxed">
                                        Haiiii :3<br/>
                                        <span className="text-sm md:text-lg text-gray-500">Hello! Im Thea</span>
                                    </h1>
                                    <div className="font-['VT323'] text-xl bg-blue-100 p-2 border-l-4 border-blue-500 mb-4 inline-block">
                                        {PROFILE.bio}
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="bg-black text-white px-2 py-1 text-sm font-bold rounded-sm">furage 2020-2025</span>
                                        <span className="bg-transparent border border-black px-2 py-1 text-sm font-bold text-black rounded-sm">CEO OF Origin Innovation Hub</span>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-4 border-b-2 border-black border-dashed mb-8 opacity-30"></div>

                            {/* Content Sections */}
                            <div className="grid grid-cols-1 gap-6">
                                
                                {/* Music Section */}
                                <div className="bg-gray-100 p-4 border-2 border-black relative">
                                    <div className="absolute -top-3 left-4 bg-white px-2 font-bold border border-black text-xs uppercase tracking-widest">Now Playing</div>
                                    <MusicPlayer tracks={PLAYLIST} />
                                </div>

                                {/* Links Section */}
                                <div>
                                    <h3 className="font-['Press_Start_2P'] text-sm mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 bg-black"></span>
                                        CONNECT
                                    </h3>
                                    {SOCIAL_LINKS.map((link, index) => (
                                        <LinkCard key={link.id} link={link} index={index} />
                                    ))}
                                </div>
                            </div>
                            
                            {/* Footer Signature */}
                            <div className="mt-12 text-center">
                                <span className="font-['Press_Start_2P'] text-2xl tracking-tighter opacity-80">
                                    &gt; <span className="underline">OPERATING</span> &lt;
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Color Palette (Bottom) */}
                <div className="bg-[#c0c0c0] p-2 border-t border-white flex gap-2 items-center">
                    <div className="w-8 h-8 bg-black border-2 border-gray-400 inset shadow-inner"></div>
                    <div className="flex flex-wrap w-64 gap-0.5">
                        {colors.map((c, i) => (
                            <div key={i} className="w-3 h-3 border border-gray-600" style={{ backgroundColor: c }}></div>
                        ))}
                    </div>
                    <div className="flex-1 text-right text-[10px] text-gray-600 font-sans">
                        78, 65
                    </div>
                </div>
            </div>
        </div>
        
        {/* Monitor Base */}
        <div className="w-48 h-12 bg-[#d8d4c8] mx-auto -mt-2 relative z-0 shadow-lg border-x-4 border-[#b8b4a8]"></div>
        <div className="w-64 h-4 bg-[#e6e2d6] mx-auto rounded-b-xl shadow-xl border-b-4 border-r-4 border-[#b8b4a8]"></div>
      </div>
    </div>
  );
}

export default App;
