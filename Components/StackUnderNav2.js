import React from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity, TextInput} from 'react-native';
import { Badge } from 'react-native-elements';
import {Entypo} from '@expo/vector-icons'
import {createStackNavigator, createAppContainer} from 'react-navigation'
import TabNavigationC from './NavigationDeck';





/*************************TEST *************/



class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: 'mn' };
      }

    render() {
      const navigation = this.props.navigation
      const {params} = this.props.navigation.state
      alert(navigation.getParam("tex"))
    //   alert(params.mytext)
      return (
        <View style={styles.container}>
  
          <Text style={{fontSize:20,margin:30}}>Cards Page</Text>
          
       
          
           <Text style={{fontSize:20,margin:30}}>{navigation.getParam("tex") === undefined ? 1 : 0}</Text>
         {/* <Text style={{fontSize:20,margin:30}}>{params.noOfDecks != undefined ? params.noOfDecks: 0}</Text> */}

          <TouchableOpacity onPress={()=> navigation.navigate('Test')}
            style={{margin:30,justifyContent:'center', alignItems:'center', margin: 20, width:120, height:40, backgroundColor:'black', borderRadius:10}}>
            <Text style={{color:'white'}}>CONTINUE</Text>
          </TouchableOpacity>


        <Text>{this.state.text}</Text>
          
          {/* <TouchableOpacity onPress={()=> this.setState({text: navigation.getParam('tex')})}
            style={{margin:30,justifyContent:'center', alignItems:'center', margin: 20, width:120, height:40, backgroundColor:'black', borderRadius:10}}>
            <Text style={{color:'white'}}>Change State</Text>
          </TouchableOpacity> */}

           <TouchableOpacity onPress={()=> this.setState({text: params.mytext})}
            style={{margin:30,justifyContent:'center', alignItems:'center', margin: 20, width:120, height:40, backgroundColor:'black', borderRadius:10}}>
            <Text style={{color:'white'}}>Change State2 </Text>
          </TouchableOpacity> 
          
        </View>
      );
    }
  }












  /*********************************************Add Deck*********************** */



class AddDeckC extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
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
        
        
        <TouchableOpacity  onPress={()=> navigation.navigate('TDeck', {text: this.state.text})}
        style={{justifyContent:'center', alignItems:'center', margin: 20, width:120, height:30, backgroundColor:'black', borderRadius:10}}>
          <Text style={{color:'white'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}









/*******************************The Deck***************************** */



  class TheDeck extends React.Component {

    constructor(props) {
        super(props);
        this.state = {noOfCards: 0}
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







/******************************************Add Card***************************** */


class AddCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
      }
  render() {
    // const txt = navigation.setParam(this.state.text);
    const navigation = this.props.navigation
    return (
      <View style={styles.container3}>

        <Text style={{fontSize:20, fontWeight:'bold', margin:30}}>New Card</Text>
        <View style={{width:270, height:1, borderWidth:1}}/>

        <TextInput
            style={{height: 40, borderColor: 'grey', borderWidth: 1, margin:30, borderRadius:20, padding:10, width:250}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="Enter Question"
        />

        <TextInput
            style={{height: 40, borderColor: 'grey', borderWidth: 1, margin:20, borderRadius:20, padding:10, width:250}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder="Enter Answer 'Correct' or 'Incorrect'"
        />

    
        
        
        <TouchableOpacity  onPress={()=> navigation.navigate('TDeck', {text: this.state.text})}
        style={{justifyContent:'center', alignItems:'center', margin: 20, width:120, height:30, backgroundColor:'black', borderRadius:10}}>
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
      container3: {
        //flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius:10,
        borderWidth: 4,
        margin: 12,
        marginTop: 90
        
      },

  });
  /*********************************************************************** */




















const StackNavigator = createStackNavigator(

    // console.log(this.props.text),
    {
        //ROUTESSS
        
      

        TDeck : {
            screen: TheDeck,
            
           // params : {username: 'pinger'},
            // navigationOptions: {
            //     title: "Flash Cards",
            //    headerBackImage: ()=> <Entypo name="back" size={20} color='blue'/>,
            // }

            navigationOptions: ({ navigation }) => ({
                title: `${navigation.state.params.text}`,
              }),
        },

        ACard : {
            screen: AddCard,
            
           // params : {username: 'pinger'},
            // navigationOptions: {
            //     title: "Flash Cards",
            //    headerBackImage: ()=> <Entypo name="back" size={20} color='blue'/>,
            // }

            // navigationOptions: ({ navigation }) => ({
            //     title: `${navigation.state.params.text}`,
            //   }),
        },

        
        AddDeck : {
            screen: AddDeckC,
            navigationOptions:{
                header: null
               //title: `${navigation.state.params.name}`,
            },
       
           
           
            
        },

        Tst : {
            screen: Test,
            params: ({navigation}) => ({tex: navigation.state.props.mytext}),
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



export default StackUnderNav2 = createAppContainer(StackNavigator);
