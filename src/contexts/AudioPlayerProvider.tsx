import React, {useEffect, useState} from 'react';
import TrackPlayer, {
  useTrackPlayerEvents,
  Event,
  State,
} from 'react-native-track-player';
import {AudioPlayerContext} from './AudioPlayerContext';
import {Track} from '../data/trackList';

interface Props {
  children: React.ReactNode;
}
export const AudioPlayerProvider = ({children}: Props) => {
  const [currentTrack, setCurrentTrack] = useState<Track>();
  const [isTrackPlaying, setIsTrackPlaying] = useState(false);

  useEffect(() => {
    TrackPlayer.setupPlayer({});
  }, []);

  useTrackPlayerEvents([Event.PlaybackState], async event => {
    if (event.state === State.Paused) {
      setIsTrackPlaying(false);
    } else if (event.state === State.Playing) {
      setIsTrackPlaying(true);
    }
  });

  const selectTrack = (track: Track) => {
    const handlePlayNewTrack = async () => {
      setCurrentTrack(track);
      await TrackPlayer.reset();
      await TrackPlayer.add(track);
      await TrackPlayer.play();
    };
    handlePlayNewTrack();
  };

  const togglePlayPauseTrack = () => {
    if (isTrackPlaying) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        currentTrack,
        selectTrack,
        isTrackPlaying,
        togglePlayPauseTrack,
      }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};
