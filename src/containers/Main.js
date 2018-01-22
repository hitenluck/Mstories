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
    this.state={amount:0}
  }


  deposit(){
    this.props.deposit(this.state.amount)
  }

  onChangeKey=(text)=>{
    console.log(text)
    this.state.amount=text
  }

  withdraw(){
    this.props.withdraw(this.state.amount)
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.childView}>

          <CustomInput
            ref={(node) => { this.tagInput = node; }}
            onChange={this.onChangeKey}/>

          <View style={{marginTop:10,width:'60%'}}>
            <CustomeButton
              value="Deposit" onPress={()=>{this.deposit()}} />

            <CustomeButton
              value="Withdraw" onPress={()=>{this.withdraw()}} />

          <Text style={styles.indicatorText}>
              hey Your Current Balance is:
                <Text style={styles.runningBal}>
                  {this.props.runningAmt}
                </Text>
          </Text>
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
  indicatorText:{
    color:'blue',
    fontSize:14
  },
  runningBal:{
    color:'red',
    fontSize:22
  }
});

const mapStateToProps=state=>{
  return{
    countData:state.countData,
    runningAmt:state.runningAmt,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators,dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Main);
