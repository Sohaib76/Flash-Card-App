//https://reactnavigation.org/docs/en/tab-based-navigation.html
import React, {Component} from 'react';
import { ScrollView, 
  Button, StyleSheet, Text, View ,TextInput, Image,TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import {Feather} from '@expo/vector-icons'
import {createMaterialTopTabNavigator, createStackNavigator,createAppContainer, createBottomTabNavigator} from 'react-navigation'
import { colors,Badge } from 'react-native-elements';
import MainPage from './MainPage';
import StackUnderNav from './StackUnderNav';
import StackUnderNav2 from './StackUnderNav2';



//Classes OR Screens  










//DELETE       IF           USELESSS


class AddDeckC extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '' , noOfDecks: 0};

      }
  render() {
    // const txt = navigation.setParam(this.state.text);
    const navigation = this.props.navigation
    return (
      <View style={styles.container2}>

        <Text style={{fontSize:20, fontWeight:'bold', margin:30}}>New Deck</Text>
        <View style={{width:270, height:1, borderWidth:1}}/>

        <TextInput
            style={{height: 40, borderColor: 'grey', borderWidth: 1, margin:30, borderRadius:20, padding:10, width:250}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="Enter Deck Title"
        />

        <Badge value="99+" status="error" badgeStyle={{backgroundColor:'black'}} />
        
        
        <TouchableOpacity  onPress={()=> {navigation.navigate('Decks', {text: this.state.mytext, noOfDecks: this.state.noOfDecks}) ,this.setState(
        (prevState) => ({
            noOfCards: prevState.noOfCards+1
        })
    )}}
        style={{justifyContent:'center', alignItems:'center', margin: 20, width:120, height:30, backgroundColor:'black', borderRadius:10}}>
          <Text style={{color:'white'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}




/***********************************Stack Under Nav 3 **************/

/********************************COMPONENTS */

class Test extends React.Component {

    render() {
      const navigation = this.props.navigation
     // const {params} = this.props.navigation.state
    //   alert(navigation.getParam("tex"))
      return (
        <View style={styles.container}>
  
          <Text style={{fontSize:20,margin:30}}>Cards Page</Text>
          
       
          
         {/*   <Text style={{fontSize:20,margin:30}}>{navigation.getParam("tex") === undefined ? 0 : 1}</Text>
         <Text style={{fontSize:20,margin:30}}>{params.noOfDecks != undefined ? params.noOfDecks: 0}</Text> */}

          <TouchableOpacity onPress={()=> navigation.navigate('page2')}
            style={{margin:30,justifyContent:'center', alignItems:'center', margin: 20, width:120, height:40, backgroundColor:'black', borderRadius:10}}>
            <Text style={{color:'white'}}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }




  


/*************************SEtup************************ */
const StackNavigator = createStackNavigator(

   
    {
       
     
        AddDeck : {
            screen: MainPage,
            navigationOptions:{
                header: null
        
            },
       
       
        },

        Tst : {
            screen: Test,
            params: ({navigation}) => ({tex: navigation.state.text}),
            navigationOptions:{
                header: null,

               //title: `${navigation.state.params.name}`,
      },
    }


      
       
    
    },
    {
        //STYLINGGG
        initialRouteName : "Tst",
        
      
    }
);




















//Import Them

//TabNavigator
const TabNavigator = createMaterialTopTabNavigator(
{
    //ROUTESSS

    Add_Deck : {
        //screen: StackUnderNav,
        screen: AddDeckC,
        navigationOptions: {
            tabBarIcon: ()=> <Feather name="info" size={20} color='blue'/>,
        }
    },

    Decks : {
       // Test
        screen: StackUnderNav2,
        navigationOptions: {
            tabBarIcon: ()=> <Feather name="home" size={20} color='blue'/>,
           
        }
        // createStackNavigator({
        //     Tst: {
        //         screen: Test,
        //     },
        //     page2: {
        //         screen: MainPage,
        //     }

        // },
 
        // )
        
    },
 
  

},
{
    //STYLINGGG
    initialRouteName : "Add_Deck",
    tabBarPosition: "bottom",
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showIcon: 'true',
        labelStyle:{
            fontSize: 15,
            color: 'blue'
        },
        tabStyle: {
            // width: 200
        },
        style: {
            backgroundColor: "#029df0",
            borderRadius: 8
        },
        indicatorStyle: {
            backgroundColor: 'black'
        }



      },
      order: ["Decks", "Add_Deck", ]
  
}
);












/************************STYLES ************************************* */
const styles = StyleSheet.create({
   
    container2: {
        //flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius:10,
        borderWidth: 4,
        margin: 12,
        marginTop: 120
        
      },
   

  });
  /*********************************************************************** */





















export default TabNavigationC = createAppContainer(TabNavigator);