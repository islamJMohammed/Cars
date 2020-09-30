import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ParkCar from './ParkCar';
import Slots from './Slots';

const ParkStack = createStackNavigator();
const CreatePark=({navigation})=>{
    return(
      
        <ParkStack.Navigator
        screenOptions ={{
          headerStyle:{
            backgroundColor:"#6f1282",   
            height:55,
          },
          
          headerTitleAlign: 'center',
          headerShown: true,
          headerTintColor:"#fff",
          headerTitleStyle:{
          },
         
  
       }}
     
        
        >
          <ParkStack.Screen name="Park Car" component={ParkCar}   options={{
        headerLeft: () => (
          <View style={{marginLeft: 20}}>
            <Icon.Button
              name="chevron-left"
              size={25}
              color='white'
              backgroundColor="#6f1282"
              onPress={() => navigation.goBack()}
            />
          </View>
        ),}}/>
         <ParkStack.Screen name="Choose available slots" component={Slots} />
        </ParkStack.Navigator>
      );
}

export default CreatePark;