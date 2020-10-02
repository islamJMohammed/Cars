import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';
import App2 from './screens/App2';
import WelcomeScreen from './screens/WelcomeScreen';
import Signup from './screens/Signup';
import SignInScreen from './screens/SignInScreen';
import ForgetPass from './screens/ForgetPassword';
import FindMyPosition from './screens/FindMyPosition';
import ParkingHistory from './screens/ParkingHistory';
const Stack = createStackNavigator();
const isThereUser=true;

const App=()=>{

  return(
    <ParkingHistory/>
  
  );
}
export default App;
