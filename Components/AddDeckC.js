import React from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Badge } from 'react-native-elements';


export default class AddDeckC extends React.Component {

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
