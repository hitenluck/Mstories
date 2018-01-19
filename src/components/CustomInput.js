import React, { Component } from 'react';
import {
  StyleSheet,
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
  inputStyle:{
    width:'80%',
    borderBottomWidth:1,
    borderBottomColor:'red'
  }
});

export default CustomInput;
