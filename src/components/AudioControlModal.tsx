import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Track} from '../data/trackList';
import {colors} from '../style/colors';

interface Props {
  currentTrack: Track;
}

export const AudioControlModal = ({currentTrack}: Props) => {
  const {artwork, title, artist} = currentTrack;
  return (
    <View style={styles.row}>
      <Image style={styles.albumImage} source={{uri: artwork}} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    // flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: colors.darkNavy,
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
