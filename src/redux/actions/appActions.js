import * as constants from './constants'

export function addData(){
return{
type:constants.GET_DATA
}
}

export function getText(text){
return{
  type:constants.GET_TEXT,
  payload:text
}
}
