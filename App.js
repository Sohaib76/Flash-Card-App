import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './Components/MainPage';
import AddDeckC from './Components/AddDeckC';
import TDeckStack from './Components/TheDeckSkeleton';
import Stack from './Components/Stack';
import TabNavigationC from './Components/NavigationDeck';


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        
          <Stack/>
        
        

        {/* <StackNavigatorEG/> */}
        {/* <MainPage/> */}
        {/* <AddDeckC/> */}
        {/* <TDeckStack/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
