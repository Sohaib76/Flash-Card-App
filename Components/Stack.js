import React from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity, TextInput} from 'react-native';
import { Badge } from 'react-native-elements';
import {Entypo} from '@expo/vector-icons'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import myTabNavigationC from './myNavigationDeck';






/*******************************MAIN  PAGE***************************** */
class MainPage extends React.Component {
    render() {
      const navigation = this.props.navigation
      return (
        <View style={styles.container}>
  
          <Text style={{fontSize:20,margin:30}}>Flash Cards App!</Text>
          <Image style={{width: 200, height: 200, margin:30}} source={require('./flash-cards.png')} />
          
          <TouchableOpacity onPress={()=> navigation.navigate('AddDeck')}
            style={{margin:30,justifyContent:'center', alignItems:'center', margin: 20, width:120, height:40, backgroundColor:'black', borderRadius:10}}>
            <Text style={{color:'white'}}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }


















  /*********************************************Add Deck*********************** */
        
  
        /**DEELETE      THIS                    CLASSS */


class AddDeckC extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
      }
  render() {
    return (
      <View style={styles.container}>

        <Text style={{fontSize:20, fontWeight:'bold', margin:30}}>New Deck</Text>
        <View style={{width:270, height:1, borderWidth:1}}/>

        <TextInput
            style={{height: 40, borderColor: 'grey', borderWidth: 1, margin:30, borderRadius:20, padding:10, width:250}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="Enter Deck Title"
        />

        <Badge value="99+" status="error" badgeStyle={{backgroundColor:'black'}} />
        
        
        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', margin: 20, width:120, height:30, backgroundColor:'black', borderRadius:10}}>
          <Text style={{color:'white'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


















/************************STYLES ************************************* */
const styles = StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderRadius:10,
      borderWidth: 4,
      margin: 12,
      marginTop: 20
      
    },
  });
  /*********************************************************************** */




















const StackNavigator = createStackNavigator(
    {
        //ROUTESSS
    
        Home : {
            screen: MainPage,
           // params : {username: 'pinger'},
            navigationOptions: {
                title: "Flash Cards",
               headerBackImage: ()=> <Entypo name="back" size={20} color='blue'/>,
            }
        },

        AddDeck : {
            screen: myTabNavigationC,
            navigationOptions:{
                header: null
            }
         
           // params : {username: 'pinger'},
            
        },

      
       
    
    },
    {
        //STYLINGGG
        initialRouteName : "Home",
        
      
    }
);



export default Stack = createAppContainer(StackNavigator);
