import React, {useContext} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../style/colors';
import {AudioPlayerContext} from '../contexts/AudioPlayerContext';

export const AudioControlModal = () => {
  const {currentTrack, isTrackPlaying, togglePlayPauseTrack} =
    useContext(AudioPlayerContext);

  if (!currentTrack) {
    return null;
  }

  const {artwork, title, artist} = currentTrack;

  return (
    <View style={styles.row}>
      <View style={styles.albumInfo}>
        <Image style={styles.albumImage} source={{uri: artwork}} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.artist}>{artist}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => togglePlayPauseTrack()}>
        <Icon
          name={isTrackPlaying ? 'pause' : 'play'}
          size={24}
          color={colors.paleCream}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: colors.darkNavy,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Platform.OS === 'android' ? 20 : 0,
  },
  albumInfo: {
    flexDirection: 'row',
  },
  albumImage: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.paleCream,
  },
  artist: {
    fontSize: 12,
    color: colors.paleCream,
  },
});
