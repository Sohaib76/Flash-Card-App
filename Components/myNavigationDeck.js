//https://reactnavigation.org/docs/en/tab-based-navigation.html
import React, {Component} from 'react';
import { ScrollView, 
  Button, StyleSheet, Text, View ,TextInput, Image,TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import {Feather,Entypo} from '@expo/vector-icons'
import {createMaterialTopTabNavigator, createStackNavigator,Alert,createAppContainer, createBottomTabNavigator} from 'react-navigation'
import { colors,Badge,AntDesign } from 'react-native-elements';
import MainPage from './MainPage';
import StackUnderNav from './StackUnderNav';
import StackUnderNav2 from './StackUnderNav2';












//Functions


var SampleArray = ["ONE"] ;







//Classes OR Screens  










//DELETE       IF           USELESSS


class AddDeckC extends React.Component {





    constructor(props) {
        super(props);
        this.state = { textArray:[], text: " " , noOfDecks: 0};

      }



      AddItemsToArray=()=>{

        //Adding Items To Array.
        SampleArray.push( this.state.text.toString() );
  
        // Showing the complete Array on Screen Using Alert.
        alert(SampleArray.toString());
  
    }
      
  render() {
    console.log(this.state.textArray)
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
        
        
        <TouchableOpacity  onPress={()=> {navigation.navigate('Tst', {text: this.state.text, noOfDecks: this.state.noOfDecks}) ,this.setState(
        (prevState) => ({
            noOfDecks: prevState.noOfDecks+1,
           
        })
    ), this.AddItemsToArray()} }
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

    constructor(props){
        super(props);
        this.state = {noOfCard: 0}
    }

    render() {
      const navigation = this.props.navigation
      const {params} = this.props.navigation.state
    //   alert(navigation.getParam("tex"))
      return (
        <View style={styles.container}>
  
          <Text style={{fontSize:20,margin:30}}>Cards Page</Text>
          
        <Text>{params.noOfDecks=== undefined ? 90 : params.noOfDecks}</Text>
        <View style={{backgroundColor:'red'}}>
        <Text>{params.text}</Text>
        </View>

        <View >
        {SampleArray.map(item => (
          <TouchableOpacity onPress={()=> navigation.navigate("TDeck", {noOfCard: this.state.noOfCard})}
              style={{borderWidth: 5,margin:10, justifyContent:'center',alignItems:'center',borderRadius:10, backgroundColor:'#029df0', width: 150, height: 90}}>
            <Text style={{fontSize:20}} key={item}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>


        {/* <View style={{borderWidth: 5,margin:10, justifyContent:'center',alignItems:'center',borderRadius:10, backgroundColor:'#029df0', width: 150, height: 90}}> 
            <Text style={{fontSize:20}}>{params.text}</Text>
            <Text style={{fontSize:20}}>{this.state.noOfCard} Cards</Text>
        </View>
         */}
          
        

          <TouchableOpacity onPress={()=> navigation.navigate('page2')}
            style={{margin:30,justifyContent:'center', alignItems:'center', margin: 20, width:120, height:40, backgroundColor:'black', borderRadius:10}}>
            <Text style={{color:'white'}}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }







  /***************************************************TEHE DECK */
  class TheDeck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {noOfCards: this.props.navigation.state.noOfCard}
      }
  render() {
    const navigation = this.props.navigation
    const {params} = this.props.navigation.state
    return (
      <View style={styles.container}>

        {/* <Text>{params.text}</Text> */}

        <Text style={{fontSize:20, fontWeight:'bold', margin:30}}>Total Cards : {this.state.noOfCards}</Text>
        <View style={{width:270, height:1, borderWidth:1}}/>
        
        
        
        
        <TouchableOpacity 
        style={{justifyContent:'center', alignItems:'center', marginTop:30,margin: 20, width:140, height:50, backgroundColor:'black', borderRadius:10}}>
          <Text style={{color:'white'}}>Start Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> {navigation.navigate('ACard', 
        {noOfCards: this.state.noOfCards}) ,this.setState(
        (prevState) => ({
            noOfCards: prevState.noOfCards+1
        })
    )} } 
            style={{justifyContent:'center', alignItems:'center', margin: 20, width:140, height:50, backgroundColor:'black', borderRadius:10}}>
          <Text style={{color:'white'}}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', marginBottom:30 ,margin: 20, width:140, height:50, backgroundColor:'black', borderRadius:10}}>
          <Text style={{color:'white'}}>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}











/*************************************************************************** */

























  


/*************************SEtup************************ */

    // {
    //     //STYLINGGG
    //     initialRouteName : "Tst",
        
      
    // }




//Stack Navigator

const myStackNavigator = createStackNavigator(

    {
 
        TDeck : {
            screen: TheDeck,
            navigationOptions: {
                  title: "The Deck Options",
                  headerBackImage: ()=> <AntDesign name="back" size={20} color='blue'/>,
              }
       
       
        },

        Tst : {
            screen: Test,
            //params: ({navigation}) => ({tex: navigation.state.text}),
            navigationOptions:{
                header: null,

               //title: `${navigation.state.params.name}`,
      },
    }
  
    
    },
)
















//Import Them

//TabNavigator
const TabNavigator = createMaterialTopTabNavigator(
{
    //ROUTESSS

    Add_Deck : {
        screen: AddDeckC,
        navigationOptions: {
            tabBarIcon: ()=> <Feather name="info" size={20} color='blue'/>,
        }
    },

    Decks : {
     
        screen: myStackNavigator,
        navigationOptions: {
            tabBarIcon: ()=> <Feather name="home" size={20} color='blue'/>,
           
        }
        
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





















export default myTabNavigationC = createAppContainer(TabNavigator);