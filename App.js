/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducer,compose} from 'redux'
import {createLogger} from 'redux-logger'
import reducer from './src/redux/reducers'
import thunkMiddleware from 'redux-thunk'
const loggerMiddleware=createLogger({predicate:(getState,action)=>__DEV__});

function configureStore(initialState){
  const enhanacer=compose(
    applyMiddleware(
      loggerMiddleware,
      thunkMiddleware
    ),
  );
  return createStore(reducer,initialState,enhanacer);
}

const store=configureStore({})
import Main from './src'
export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
      <Main/>
    </Provider>
    );
  }
}
