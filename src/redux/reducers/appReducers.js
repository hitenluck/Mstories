import createReducer from '../../lib/createReducer';
import * as constants from '../actions/constants'

export const searchData=createReducer({},{
});

export const countData=createReducer(0,{
  [constants.GET_DATA](state,action){
    return state+10
  }
});

export const text=createReducer('',{
  [constants.GET_TEXT](state,action){
    return {...state,text:action.payload}
  }
});
