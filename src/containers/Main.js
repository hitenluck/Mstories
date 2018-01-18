/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {bindActionCreators} from  'redux'
import {ActionCreators} from '../redux/actions'
import CustomInput from '../components/CustomInput';
import CustomeButton from '../components/CustomeButton'
import {connect} from 'react-redux'
 class Main extends Component<{}> {
  constructor(props){
    super(props);
  }
  getData(){
    this.props.addData()
  }
  onChangeText(text){
  
this.props.getText(text)

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.childView}>
      <CustomInput onChangeText={(text)=>{this.onChangeText(text)}}/>
      <View style={{marginTop:10,width:'60%'}}>
      <CustomeButton onPress={()=>{this.getData()}} />
      <Text>{this.props.text}</Text>
      </View>
    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  childView:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
const mapStateToProps=state=>({
countData:state.countData,
text:state.text,
});

function mapDispatchToProps(dispatch){
return bindActionCreators(ActionCreators,dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Main);
