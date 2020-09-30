import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text,View,StyleSheet, TextInput,Animated, Dimensions, TouchableOpacity,ScrollView} from 'react-native';
import { TypingAnimation } from 'react-native-typing-animation';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from 'react-native-animatable';
class ForgetPass extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            typing_email:false,
            typing_user:false,
            typing_pass:false,
            typing_conPass:false,
            isValidUser:true,
            isValidPassword:true,
            isValidEmail:true,
            isValidConPassword:true,
            animation_login:new Animated.Value(width-40),
            enable:true,
            disabled_press:true,

         };
    }
      
    _foucus(value){
      

            if(value=="email"){
                this.setState(
                    {
                        typing_email:true,
                        typing_user:false,
                        typing_pass:false,
                        typing_conPass:false
                    }
                )
            }

            else  if(value=="user"){
                this.setState(
                    {
                        typing_email:false,
                        typing_user:true,
                        typing_pass:false,
                        typing_conPass:false
                    
                    }
                )
            }

            else  if(value=="pass"){
                this.setState(
                    {
                        typing_email:false,
                        typing_user:false,
                        typing_pass:true,
                        typing_conPass:false
                    
                    }
                )
            }

            else  if(value=="passC"){
                this.setState(
                    {
                        typing_email:false,
                        typing_user:false,
                        typing_pass:false,
                        typing_conPass:true
                    }
                )
            }
     
    }

  _typing(){
    return (
        <TypingAnimation 
          dotColor="#6f1282"
          style={{marginRight:25}}
        
        />
      );
  
  }
  _animation(){
      Animated.timing(
          this.state.animation_login,{
              toValue:40,
              duration:250
          }
      ).start();

      setTimeout(()=>{
          this.setState({
              enable:false,
              typing_email:false,
              typing_user:false,
              typing_pass:false,
              typing_conPass:false
          })
      },150);
  }
    validate(text,type){
       E=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(type=='email'){
            if(E.test(text))
            {
            this.setState({
                isValidEmail:true,
            })
            }
            else{
                this.setState({
                    isValidEmail:false,
                })
            } 
        }
        }


    render(){
         const width =  this.state.animation_login;
    return(
        
        <View  style={ styles.container } >
            
            <LinearGradient  colors={["#eba9cf","#6f1282"]} 
             start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.6}}
             locations={[0,0.5,0.6]}
            style={ styles. header } >
                <Animatable.Text style={ styles.textSignup}
                animation="fadeInLeft"
                duration={4000}> Forget Your Password</Animatable.Text>
                <Text style={styles.text} >Reset Password Now </Text>
           </LinearGradient>

           <Animatable.View style={[styles.footer,{marginEnd:20}]}
            
            animation="bounceInUp"
            duration={5000}
           >
           <View>




            

                 <Text style={[styles.title,{marginTop:20}]}>E-mail</Text>
             <View style={styles.action}>
          
             <FontAwesome
                name="envelope-o"
                 color="#05345a"
                 size={20}
                 style={{paddingTop:10,paddingEnd:4,marginTop:6}}
              
              />

                 <TextInput
                
                 placeholder="Enter your email.."
                 style={styles.inputText}
                 onFocus={()=>this._foucus("email")}
                 onChangeText={(text)=>this.validate(text,'email')}
                 />
                  {this.state.typing_email ?
                 this._typing()
                  :null }
                 </View>
                 {this.state.isValidEmail ? null : 
                    <Animated.View
                        animation="fadeInLeft" duration={500}
                        > 
                        <Text style={styles.ErrMsg}>Email must follow Email format. </Text>
                        </Animated.View>
                 }
                  
                 
                
                 
                 </View>


                   <TouchableOpacity
                     style={{ opacity:this.state.disabled_press ? 0.5 : 1 }}
                     disabled={this.state.disabled_press}
     
           onPress={()=>this._animation()}>
            
           <View style={styles.Butt_cont}>
               <Animated.View style={[styles. anmation,{width}]}>
                {this.state.enable?
               <Text style={styles.logText}>Send</Text>
               :
               <FontAwesome
               name="check"
                color="white"
                size={20}
               /> }
                
               </Animated.View>
           </View>
           </TouchableOpacity>
           <View style={styles.signUp}>
              <Text style={{color:'blue'}}onPress={()=>this.props.navigation.goBack()}> Back to Sign In</Text>

          </View>
           </Animatable.View>
         
          

           
 
        </View>
        
    );}

}


const width = Dimensions.get("screen").width;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor:"white",
            justifyContent:'center'
        },

        
        header:{
            backgroundColor:"white",
            flex:1.3,
            justifyContent:"center",
            alignItems:"center",
            borderTopLeftRadius: 0,
            borderBottomRightRadius: 800,
           
            
        },

        footer:{
            backgroundColor:"white",
           flex:2.4,
           padding:20,
           
           

        },
        textSignup:{
            color:"#fff",
            fontWeight:"bold",
            fontSize:22,
            paddingEnd:20,
         
        },
        text:{
            color:"#f7c202",
            fontSize:14,
            marginLeft:-90
           
        },

        title:{
         color:"black",
         fontWeight:"bold",
            fontSize:18,
        },

        action:{
            flexDirection:"row",
            borderBottomWidth:1,
            borderBottomColor:"#f2f2f2"
        },

        inputText:{
          flex:1,
          marginTop:5,
          paddingBottom:1,
          color:"gray"

        },
        Butt_cont:{
            justifyContent:'center',
            alignItems:'center'
        },
         anmation:{
             backgroundColor:"#6f1282",
             paddingVertical:10,
             marginTop:55,
             marginBottom:10,
             borderRadius:100,
             justifyContent:'center',
             alignItems:'center'
         },       
         signUp:{
            flexDirection:'row',
            justifyContent:'center',
            marginTop:6,
             marginBottom:5
        },
         logText:{
             color:'white',
             fontWeight:'bold',
             fontSize:18
         },
         ErrMsg:{
            color:"red",
            fontSize:10

        }

     } );






    export  default ForgetPass;