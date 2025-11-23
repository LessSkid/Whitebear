import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: LucideIcon;
  color: string;
}

export interface ProfileData {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  location: string;
  availability: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  STREAMING = 'STREAMING',
  ERROR = 'ERROR'
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  url: string;
  duration?: string;
  cover?: string;
}