/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

import { StoreScreen , AccountScreen , LoginScreen , RegisterScreen , TrannsactionHistoryScreen } from './src/screen';
import App from './src/navigation/App';
import UITab from './src/navigation/UITab';


AppRegistry.registerComponent(appName, () => App);
