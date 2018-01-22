import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';
class CustomInput extends Component{
  static propTypes = {
    onChange:PropTypes.func,
  }

  constructor(props){
    super(props)
    this.state={
      text:''
    }
  }
  componentDidUpdate() {
    if (this.searchInput) {
      if (this.searchInput._lastNativeText !== this.state.text) {
        this.searchInput._inputRef.setNativeProps({ text: this.state.text, value: this.state.text });
        this.searchInput._lastNativeText = this.state.text;
      }
    }
  }

  static defaultProps = {
    onChange: () => null,
  }

  _onChangeText(text)
  {
      this.props.onChange(text);
  }
  render(){
    return(
<<<<<<< HEAD
      <TextInput
        ref={(node) => { this.searchInput = node; }}
        onChangeText={this._onChangeText.bind(this)}
        underlineColorAndroid='transparent'
        placeholder='Enter amount'

        style={styles.inputStyle}/>
=======
        <TextInput
          onChangeText={this.props.onChangeText}
          underlineColorAndroid='transparent'
          placeholder='Enter amount'
          style={styles.inputStyle}/>
>>>>>>> 5da3dcf650ff015a4db07fafb201c21209cdcf0c
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
