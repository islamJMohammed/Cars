import React, { useState,useEffect} from 'react';
import {StyleSheet,TextInput,View,Text,TouchableOpacity,ScrollView,Modal} from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Duration from './Duration';


const ParkCar=({navigation})=>{
 
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [time, setTime] = useState(new Date());
    const [show, setShow] = useState(false);
  
  
    const onChange = (event, selectedValue) => {
        setShow(Platform.OS === 'ios');
        if (mode == 'date') {
          const currentDate = selectedValue;
          setDate(currentDate);
          setMode('time');

        } else {
          const selectedTime = selectedValue;
          setTime(selectedTime);
          setMode('date');
        }
      };
  
    const showMode = currentMode => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };

    const formatDate = (date) => {
        return `${date.getDate()}/${date.getMonth() +
          1}/${date.getFullYear()}`;
      };

      const formatTime=(time)=>{
        return ` ${time.getHours()}:${time.getMinutes()}`;
      };

     
            return(
          <ScrollView  style={ styles.container }>
                 <View style={{flexDirection:'row'}}>
                 <TextInput 
                    style={styles.inputStl}
                    placeholder='Enter your intended destination'></TextInput>
                    <View style={{marginTop:14,marginLeft:260,position:'absolute'}}>
                     <FontAwesome
                        name="search"
                        color="gray"
                        size={20}
                      />
                      </View>
                    </View>
                    <View >
                       <View style={styles.date_time}>
                            <IconButton
                            icon="calendar"
                            color="#6f1282"
                            size={35}
                            onPress={showDatepicker}  />
                             <Text style={styles.datetxt}>{formatDate(date)}</Text>
                     
                            <IconButton 
                            style={{marginLeft:20}}
                           icon="clock"
                           color="#6f1282"
                           size={35}
                            onPress={showTimepicker}  />
                          <Text style={styles.datetxt}>{formatTime(time)}</Text>
                              </View>
                        {show && (
                            <DateTimePicker
                            testID="dateTimePicker"
                            timeZoneOffsetInMinutes={0}
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                            />
                        )}
                        </View>
                  
                       <Duration/>

                       <View style={styles.btn_park}>
                       <TouchableOpacity style={[styles.top_bttn,{
                         marginLeft:35
                       }]}
                   onPress={() => {navigation.navigate('Choose available slots')}}
                       >
                              <Text> SLOTS </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={[styles.top_bttn,{
                        marginLeft:10
                      }]}
                     
                     >
                              <Text>PARKING</Text>
                      </TouchableOpacity>
                       </View>
                 </ScrollView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white",
        paddingTop:30,
        paddingLeft:10,
        paddingRight:10,
  
    },

    parktxt:{
        marginLeft:30,
        marginBottom:10,
    },

    inputStl:{
     
        borderBottomColor:"#6f1282",
        borderBottomWidth:1.4,
        fontSize:14,
        marginLeft:20,
        width:280,
        marginBottom:20,
      },

      date_time:{
          marginLeft:8,
          marginRight:30,
          flexDirection:'row',

      },
      datetxt:{
          marginTop:20,
          color:"#4f4d4f",
          
      },
      text: {
        fontSize: 20,
        marginTop: 10
      },
      button: {
        backgroundColor: "#4EB151",
        paddingVertical: 11,
        paddingHorizontal: 17,
        borderRadius: 3,
        marginVertical: 50
      },
      buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600"
      },
      btn_park:{
        flexDirection:'row',
        backgroundColor:"#f5e1f7",
        marginTop:5,
        paddingVertical:50,
      },
 
      top_bttn:{
        backgroundColor:"#6f1282",
        opacity:0.4,
        borderRadius: 3,
        paddingVertical:60,
        marginTop:5,
        width:130,
        justifyContent:'center',
        alignItems:'center'
     },
   

});
export  default ParkCar;