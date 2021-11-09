import React, {useState} from 'react';
import {AudioPlayerContext} from './AudioPlayerContext';

interface Props {
    children: React.ReactNode
}
export const AudioPlayerProvider = ({children}: Props) => {
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <AudioPlayerContext.Provider
      value={{
        currentTrack,
        setCurrentTrack,
      }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};
