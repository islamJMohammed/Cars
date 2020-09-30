import React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import HomeStackScreen from './mainScreen';
import ExitQr from './ExitCode';
import EnterQr from './EnterCode';
import Find from './Find';
import SignOut from './SignOut';
import Timer from './ParkingTimer';
import Create from './CreateEdit';
import CreatePark from './CreatePark';

import FindPosition from './Find';
import FindMyPosition from './FindMyPosition';
const Drawer = createDrawerNavigator();
const App2 =({navigation})=>{
    return(

        <Drawer.Navigator drawerContent={props=><DrawerContent{...props}/>}

           drawerContentOptions={
               {
                activeBackgroundColor:"black"
               }
           }
        
        drawerStyle={
            {
             backgroundColor:"white",
         
            }
           
        }
        
        
        >
           <Drawer.Screen name="HomeStackScreen" component={HomeStackScreen} />
           <Drawer.Screen name="Exit" component={ExitQr }  />
           <Drawer.Screen name="Enter" component={EnterQr } />
           <Drawer.Screen name="Find" component={Find } />
           <Drawer.Screen name="SingOut" component={SignOut} />
           <Drawer.Screen name="Timer" component={Timer} />
           <Drawer.Screen name="Park" component={CreatePark} />
           <Drawer.Screen name="EditProfile" component={Create} />

          
        </Drawer.Navigator>

    )
}
export default App2