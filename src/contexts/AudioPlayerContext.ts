import { createContext } from 'react';

export const AudioPlayerContext = createContext({
    currentTrack: null,
    setCurrentTrack: () => {},
});
