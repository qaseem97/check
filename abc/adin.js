
 import React, { Component } from 'react';
 import {
   StyleSheet,
   View,
 } from 'react-native';
 import {
   Text,
   Item,
   Label,
   Input,
   Button,
 } from 'native-base';
 import firebase from './config'
 import Form from 'react-native-form'
 import SignaturePad from 'react-native-signature-pad'
 
 export default class App extends Component{
   constructor(props) {
     super(props);
     this.state = {
       signature: "",
       track: false
      };
      this.itemsRef = firebase.database().ref().child(`User`)
   }
 
   pushToFirebase() {
     let formValues = this.refs.wavier.getValues()
     formValues.signature = this.state.signature
     if(formValues.yourname === "" || formValues.yourdata === "" || formValues.signature === "") {
       console.log("please fill all the fields")
     } else {
       this.itemsRef.push(formValues)
       this.setState({
         track: true
       })
     }
   }
 
   signaturePadChange(base64DataUrl) {
     this.setState({
       signature: base64DataUrl
     })
   }
 
   signaturePadError(error) {
     console.error(error);
   }
 
   render() {
     return (
       <View style={styles.container}>
         {this.state.track ? <View style={styles.formContainer}><Text>Your data is secured on firebase server.</Text></View> :
           <View style={styles.formContainer}>
             <Text style={styles.title}>
             Weclome to documment Wavier
           </Text>
           <Text style={styles.text}>
              Sign here for confirmation
           </Text><Text></Text><Text></Text>
           <Form ref="wavier" style={styles.form} >
             <Item floatingLabel style={styles.item}>
               <Label style={styles.label}>Your name</Label>
               <Input style={styles.input} name="yourname" type="TextInput" />
             </Item>
             <Item floatingLabel style={styles.item}>
               <Label style={styles.label}>enter your documment data in text foam</Label>
               <Input style={styles.input2} name=" yourdata" type="TextInput" />
             </Item>
             <View style={styles.signature}>
             <Label style={styles.signatureLabel}>Signature</Label>
               <SignaturePad
                 onError={(error) => this.signaturePadError(error)}
                 onChange={(sig) => this.signaturePadChange(sig)}
                 style={styles.signaturePad}
                 />
             </View>
             <Button Block primary onPress={() => this.pushToFirebase()} style={styles.button}><Text>Save it</Text></Button>
           </Form>
         </View>}
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#F5FCFF',
   },
   formContainer: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   title: {
     fontSize: 30,
     textAlign: 'center',
     margin: 10,
   },
   text: {
     textAlign: 'left',
     color: '#333333',
     marginBottom: 5,
   },
   form: {
     width: '80%'
   },
   signature:{
     width: '100%',
     height: 150,
   },
   signaturePad: {
     flex:1,
     margin: 10,
     backgroundColor: '#eee',
   },
   button: {
     margin: 10
   },
   label: {
     marginLeft: 15
   },
   input: {
     marginLeft: 25
   },
   
   input2: {
    width: 150,
    height: 150,
  },
   item: {
     marginTop:10
   },
   signatureLabel: {
     marginLeft: 15, marginTop: 15
   }
 });