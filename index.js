/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

import { StoreScreen , AccountScreen , LoginScreen , RegisterScreen , TrannsactionHistoryScreen } from './src/screen';

AppRegistry.registerComponent(appName, () =>RegisterScreen);
