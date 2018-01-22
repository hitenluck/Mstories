import * as constants from './constants'

export function deposit(text){
  return{
    type:constants.DEPOSIT,
    text
  }
}

export function withdraw(text){
  return{
    type:constants.WITHDRAW,
    text
  }
}
