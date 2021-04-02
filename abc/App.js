/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 

 import React, {Component} from 'react';
 import {View,Text,StyleSheet } from 'react-native';
 import Adiin from './adin'
 
 
 const App = () => {
   return (
     <View style = {styles.container} >
 <Adiin/>
     </View>
   );
 };
 
 const styles = StyleSheet.create(
   {
     container: {
 
       flex:1,
       justifyContent:'center',
       alignItems:'center',
     },
   });
 
   export default App;