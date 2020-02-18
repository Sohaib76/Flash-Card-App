import React from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';


export default class Test extends React.Component {
  render() {
    const navigation = this.props.navigation
    return (
      <View style={styles.container}>

        <Text style={{fontSize:20,margin:30}}>Cards Page</Text>
        
        <TouchableOpacity onPress={()=> navigation.navigate('Test')}
          style={{margin:30,justifyContent:'center', alignItems:'center', margin: 20, width:120, height:40, backgroundColor:'black', borderRadius:10}}>
          <Text style={{color:'white'}}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius:10,
    borderWidth: 4
  },
});
