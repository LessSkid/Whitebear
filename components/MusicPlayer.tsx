import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Minus, Square } from 'lucide-react';
import { MusicTrack } from '../types';

interface MusicPlayerProps {
  tracks: MusicTrack[];
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ tracks }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(currentTrack.url);
    } else {
      audioRef.current.src = currentTrack.url;
    }
    const audio = audioRef.current;
    
    const update = () => setProgress(audio.currentTime);
    const next = () => setCurrentTrackIndex(i => (i + 1) % tracks.length);
    
    audio.addEventListener('timeupdate', update);
    audio.addEventListener('ended', next);
    
    if(isPlaying) audio.play().catch(() => {});
    
    return () => {
      audio.removeEventListener('timeupdate', update);
      audio.removeEventListener('ended', next);
    };
  }, [currentTrackIndex, tracks]);

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play().catch(() => {}) : audioRef.current.pause();
    }
  }, [isPlaying]);

  const formatTime = (t: number) => {
    if (isNaN(t)) return "00:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`;
  };

  const progressPercent = audioRef.current?.duration 
    ? (progress / audioRef.current.duration) * 100 
    : 0;

  return (
    <div className="w-full mb-8 font-['VT323']">
      {/* Winamp Header */}
      <div className="bg-[#29293d] h-6 flex items-center justify-between px-2 border-t-2 border-l-2 border-[#555] border-b-2 border-r-2 border-black cursor-default select-none">
        <span className="text-white text-sm">WINAMP</span>
        <div className="flex gap-1">
          <Minus size={10} className="text-white" />
          <Square size={8} className="text-white" />
          <span className="text-white text-xs">X</span>
        </div>
      </div>

      {/* Main Body */}
      <div className="bg-[#1a1a1a] p-3 border-l-2 border-r-2 border-[#555] border-black border-b-2">
        {/* Screen */}
        <div className="bg-black border-2 border-[#444] p-2 mb-3 relative overflow-hidden">
          <div className="text-[#00ff00] text-xl animate-pulse whitespace-nowrap overflow-hidden text-ellipsis">
            {isPlaying ? `>>> ${currentTrack.title} <<<` : "READY..."}
          </div>
          <div className="flex justify-between text-[#00ff00] text-sm mt-1">
            <span className="truncate mr-2">{currentTrack.artist}</span>
            <span className="shrink-0">{formatTime(progress)}</span>
          </div>
        </div>

        {/* Controls - Responsive Layout (Stack on mobile, Row on desktop) */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
           
           {/* Progress Bar: Order-1 on Mobile (Top), Order-2 on Desktop (Right) */}
           <div className="order-1 sm:order-2 flex-1 bg-black border border-gray-600 relative h-4 sm:h-auto flex items-center px-1 cursor-pointer group">
             <div 
               className="h-2 bg-gradient-to-r from-green-500 to-red-500 relative" 
               style={{ width: `${progressPercent}%` }}
             >
                {/* Seeker Head */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#c0c0c0] border border-black shadow-sm opacity-0 group-hover:opacity-100"></div>
             </div>
           </div>

           {/* Buttons: Order-2 on Mobile (Bottom), Order-1 on Desktop (Left) */}
           <div className="order-2 sm:order-1 flex justify-center sm:justify-start gap-2">
             <button 
               onClick={() => setCurrentTrackIndex(i => (i - 1 + tracks.length) % tracks.length)} 
               className="px-4 sm:px-3 py-1 bg-gray-300 border-t border-l border-white border-b border-r border-black active:border-t-black active:border-l-black hover:bg-gray-200 active:bg-gray-400 transition-none"
               aria-label="Previous Track"
             >
               <SkipBack size={16} className="text-black" />
             </button>
             <button 
               onClick={() => setIsPlaying(!isPlaying)} 
               className="px-6 sm:px-4 py-1 bg-gray-300 border-t border-l border-white border-b border-r border-black active:border-t-black active:border-l-black hover:bg-gray-200 active:bg-gray-400 transition-none"
               aria-label={isPlaying ? "Pause" : "Play"}
             >
               {isPlaying ? <Pause size={16} className="text-black" /> : <Play size={16} className="text-black" />}
             </button>
             <button 
               onClick={() => setCurrentTrackIndex(i => (i + 1) % tracks.length)} 
               className="px-4 sm:px-3 py-1 bg-gray-300 border-t border-l border-white border-b border-r border-black active:border-t-black active:border-l-black hover:bg-gray-200 active:bg-gray-400 transition-none"
               aria-label="Next Track"
             >
               <SkipForward size={16} className="text-black" />
             </button>
           </div>
        </div>
      </div>
      
      {/* Playlist Gripper */}
      <div className="h-4 bg-[#29293d] border-b-2 border-r-2 border-black border-l-2 border-[#555] flex justify-center items-center">
        <div className="w-12 h-1 border-t border-b border-[#555]"></div>
      </div>
    </div>
  );
};

export default MusicPlayer;