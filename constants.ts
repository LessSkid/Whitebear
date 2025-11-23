import { Gamepad2, Mail, Globe } from 'lucide-react';
import { SocialLink, ProfileData, MusicTrack } from './types';

export const PROFILE: ProfileData = {
  name: "Thea!",
  role: "CEO OF Origin Innovation Hub",
  bio: "Loading personality... [||||||||||] 100% Complete. Welcome to the mainframe.",
  avatar: "./pfp.webp", 
  location: "Origin Innovation Hub",
  availability: "ONLINE"
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'discord',
    platform: 'Discord',
    url: 'https://discordapp.com/users/903202768540532747',
    icon: Gamepad2,
    color: 'hover:bg-[#5865F2] hover:text-white border-[#5865F2]'
  }
];

export const PLAYLIST: MusicTrack[] = [
  {
    id: '1',
    title: 'Penumbra Phantasm - Deltarune Chapter 7 UST',
    artist: 'The One And Bonely',
    url: '/assets/Music/Penumbra_Phantasm.mp3',
    duration: '4.33',
    cover: './Music/Penumbra_Phantasm.jpg'
  },
  {
    id: '2',
    title: 'Circus Hop',
    artist: 'YonKaGor' ,
    url: '/assets/Music/Circus_Hop_KLICKAUD.mp3',
    duration: '4:14',
    cover: '/assets/Music/Circus_Hop.jpeg'
  },
  {
    id: '3',
    title: 'Spoken For',
    artist: 'FLAVOR FOLEY',
    url: '/assets/Music/Spoken_For.mp3',
    duration: '2:55',
    cover: '/assets/Music/Spoken_For.jpeg'
  }
];

export const SYSTEM_INSTRUCTION = `
You are the "Digital Twin" of ${PROFILE.name}. 
You exist in a Y2K retro-futuristic website.
Your tone should be like a 2000s chat bot or hacker. Use leetspeak occasionally (like 'l33t', 'c00l').
Refer to the user as "User" or "Guest".

Profile Data:
${JSON.stringify(PROFILE)}

Links:
Discord: thea.bear_x

Guidelines:
- Be edgy but friendly.
- Keep answers short.
- If asked about Discord, say "Add me: thea.bear_x".
`;
