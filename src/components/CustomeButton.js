import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class CustomeButton extends Component{
 
  render(){
    
    return(

      <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
        <Text>{this.props.value}</Text>
      </TouchableOpacity>

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
  button:{

  borderRadius:16,
  borderWidth:1,
  height:40,
  margin:10,
  justifyContent: 'center',
  alignItems: 'center'
  }
});

export default CustomeButton;
