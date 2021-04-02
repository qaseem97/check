import React, {Component} from 'react';
import {Text,View,Button} from 'react-native';

export default class App extends Component
{
    Show1=()=>
    {
        alert("welcome to bro");
    }

    render()
    {
        return(
<View>
    
    <Button
    title="Button1" onPress={this.Show1}>
  

    </Button>
</View>

        );
    }
}