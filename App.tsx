import React, {useContext} from 'react';
import type {Node} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {trackList} from './src/data/trackList';
import {TrackRow} from './src/components/TrackRow';
import {colors} from "./src/style/colors";
import {AudioControlModal} from "./src/components/AudioControlModal";
import {AudioPlayerProvider} from "./src/contexts/AudioPlayerProvider";
import {AudioPlayerContext} from "./src/contexts/AudioPlayerContext";

const App: () => Node = () => {
  const { currentTrack, setCurrentTrack } = useContext(AudioPlayerContext);

  return (

    <SafeAreaView style={{flex: 1, backgroundColor: colors.sheer}}>
      <StatusBar barStyle={'dark-content'} />
      <Text style={styles.headerTitle}>Track Player</Text>
      <FlatList
        data={trackList}
        renderItem={({ item, index }) => <TrackRow track={item} handleSelectTrack={(track) => setCurrentTrack(track)} showBorder={index !== 0} />}
        showsVerticalScrollIndicator={false}
      />
      {!!currentTrack && <AudioControlModal currentTrack={currentTrack} /> }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: "bold",
    color: colors.darkCobalt,
  },
});

export const WrappedApp = () => {
  return (
      <AudioPlayerProvider>
        <App />
      </AudioPlayerProvider>
  )
}
