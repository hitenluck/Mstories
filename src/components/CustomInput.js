import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

class CustomInput extends Component{
  render(){
    return(

        <TextInput
          onChangeText={this.props.onChangeText}
          underlineColorAndroid='transparent'
          placeholder='Enter amount'
          style={styles.inputStyle}/>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputStyle:{
    width:'80%',
    borderBottomWidth:1,
    borderBottomColor:'red'
  }
});

export default CustomInput;
