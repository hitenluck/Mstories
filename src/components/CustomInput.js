import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
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
      <TextInput
        ref={(node) => { this.searchInput = node; }}
        onChangeText={this._onChangeText.bind(this)}
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
