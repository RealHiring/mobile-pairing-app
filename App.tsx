import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {trackList} from './src/data/trackList';
import {TrackRow} from './src/components/TrackRow';
import {colors} from './src/style/colors';
import {AudioControlModal} from './src/components/AudioControlModal';
import {AudioPlayerProvider} from './src/contexts/AudioPlayerProvider';

const App: () => React.ReactElement = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle={'dark-content'} />
      <Text style={styles.headerTitle}>Track Player</Text>
      <FlatList
        data={trackList}
        renderItem={({item, index}) => (
          <TrackRow track={item} showBorder={index !== 0} />
        )}
        showsVerticalScrollIndicator={false}
      />
      <AudioControlModal />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.sheer,
  },
  headerTitle: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.darkCobalt,
  },
});

export const WrappedApp = () => {
  return (
    <AudioPlayerProvider>
      <App />
    </AudioPlayerProvider>
  );
};
