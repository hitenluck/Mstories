import createReducer from '../../lib/createReducer';
import * as constants from '../actions/constants'

export const runningAmt=createReducer(0,{
  [constants.DEPOSIT](state,action){
    return  state+parseInt(action.text)
  },
  [constants.WITHDRAW](state,action){
    return  state-parseInt(action.text)
  }

});
