import React from 'react';
import { motion } from 'framer-motion';
import { SocialLink } from '../types';
import { ArrowRight } from 'lucide-react';

interface LinkCardProps {
  link: SocialLink;
  index: number;
}

const LinkCard: React.FC<LinkCardProps> = ({ link, index }) => {
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group block mb-4 relative"
    >
      <div className="
        bg-white border-2 border-black p-1 
        shadow-[4px_4px_0px_rgba(0,0,0,1)] 
        hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]
        transition-all cursor-pointer
      ">
        <div className="flex items-center justify-between p-3 border border-gray-200 border-dashed group-hover:bg-yellow-50">
          <div className="flex items-center gap-4">
            <div className={`p-2 border-2 border-black rounded-full ${index % 2 === 0 ? 'bg-blue-300' : 'bg-pink-300'}`}>
              <link.icon className="w-5 h-5 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="font-['Press_Start_2P'] text-[10px] text-black mb-1">{link.platform}</span>
              <span className="font-['VT323'] text-xl text-gray-600 group-hover:text-black">
                @thea.bear_x
              </span>
            </div>
          </div>
          
          <ArrowRight className="w-5 h-5 text-black transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.a>
  );
};

export default LinkCard;