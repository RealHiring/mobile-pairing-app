import {createContext} from 'react';
import {Track} from '../data/trackList';

interface AudioPlayer {
  currentTrack?: Track;
  isTrackPlaying?: boolean;
  selectTrack: (track: Track) => void;
  togglePlayPauseTrack: () => void;
}

export const AudioPlayerContext = createContext({
  currentTrack: undefined,
  selectTrack: () => {},
  togglePlayPauseTrack: () => {},
  isTrackPlaying: false,
} as AudioPlayer);
