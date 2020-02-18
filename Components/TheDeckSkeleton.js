import React from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity, TextInput} from 'react-native';
import { Badge } from 'react-native-elements';

import {Entypo} from '@expo/vector-icons'
import {createStackNavigator, createAppContainer} from 'react-navigation'


class TheDeckSkeleton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {noOfCards: 0}
      }
  render() {
    return (
      <View style={styles.container}>

        <Text style={{fontSize:20, fontWeight:'bold', margin:30}}>Total Cards : {this.state.noOfCards}</Text>
        <View style={{width:270, height:1, borderWidth:1}}/>

        
        
        
        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', margin: 20, width:120, height:30, backgroundColor:'black', borderRadius:10}}>
          <Text style={{color:'white'}}>Start Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', margin: 20, width:120, height:30, backgroundColor:'black', borderRadius:10}}>
          <Text style={{color:'white'}}>Add Card</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', margin: 20, width:120, height:30, backgroundColor:'black', borderRadius:10}}>
          <Text style={{color:'white'}}>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}





















const styles = StyleSheet.create({
  container: {
   // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius:10,
    borderWidth: 0.7,
    
  },
});





