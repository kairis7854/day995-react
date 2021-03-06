//彙總reducer
import {combineReducers} from 'redux'
import loginReducer from './login_reducer.js'
import phoneReducer from './phone_reducer.js'
import laptopReducer from './laptop_reducer.js'

export default combineReducers({
  userInfo:loginReducer,
  phoneInfo:phoneReducer,
  laptopInfo:laptopReducer
})