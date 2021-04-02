import React, { Component } from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import { ImagePicker } from 'expo';

import * as firebase from 'firebase/app';
import 'firebase/storage';





export default class FirebaseStorageUploader extends Component
{



  uriToBlob = (uri) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        // return the blob
        resolve(xhr.response);
      };
      
      xhr.onerror = function() {
        // something went wrong
        reject(new Error('uriToBlob failed'));
      };
      // this helps us get a blob
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      
      xhr.send(null);
    });
  }









  handleOnPress = () => { 
    alert("button pressed");
    ImagePicker.launchImageLibraryAsync({ 
      mediaTypes:"Images"
    }).then((result)=>{ 
      if (!result.cancelled) {
        // User picked an image
        const {height, width, type, uri} = result;
        console.log("image picked", uri);
      }
   
    }).catch((error)=>{
      throw error;
    }); 
    
  } 

    render()
    {
        return(
<View>
    
    <Button

    
    title="Choose Photo" onPress={this.handleOnPress}>
  

    </Button>
</View>

        );
    }
}









const styles = StyleSheet.create({ 
  button: { 
    padding: 10, 
    borderWidth: 1, 
    borderColor:"#333", 
    textAlign: "center", 
    maxWidth: 150 
  }
}); 
