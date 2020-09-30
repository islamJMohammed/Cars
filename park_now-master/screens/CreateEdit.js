import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfileScreen from './EditProfileScreen';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const EditStack = createStackNavigator();
const Create=({navigation})=>{
    return(
      
        <EditStack.Navigator
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
          <EditStack.Screen name="Edit Profile" component={EditProfileScreen}   options={{
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
        </EditStack.Navigator>
      );
}

export default Create;