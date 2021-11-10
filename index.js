import {AppRegistry} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import {WrappedApp} from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => WrappedApp);

TrackPlayer.registerPlaybackService(() => require('./trackPlayerService'));
