import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Track} from '../data/trackList';
import {colors} from '../style/colors';

interface Props {
  track: Track;
  handleSelectTrack: (track: Track) => void;
  showBorder: boolean;
}
export const TrackRow = ({track, showBorder, handleSelectTrack}: Props) => {
  const {title, artist, artwork} = track;
  return (
    <TouchableOpacity onPress={() => handleSelectTrack(track)} style={[styles.row, showBorder && styles.border]}>
      <Image style={styles.albumImage} source={{uri: artwork}} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
  border: {
    borderTopColor: colors.lightCashmere,
    borderTopWidth: 1,
  },
  albumImage: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 12,
  },
});
