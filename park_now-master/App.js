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
const Stack = createStackNavigator();
const isThereUser=true;

const App=()=>{

  return(
    <NavigationContainer >
    {!isThereUser?(
    <Stack.Navigator>
    <Stack.Screen name="Welcom" component={WelcomeScreen} /> 
    <Stack.Screen name="Sing Up" component={Signup}   navigation="Sign In"/>
    <Stack.Screen name="Sing In" component={SignInScreen } navigation={["Sign Up","Forget Password"]}  />
    <Stack.Screen name="Forget Password" component={ForgetPass }  /> 
    </Stack.Navigator>)
      :
    <App2 name="HomeStackScreen"/>
   }
  </NavigationContainer>
  );
}
export default App;
