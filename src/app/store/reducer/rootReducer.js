import {combineReducers} from 'redux'
import * as authReducer from './authReducer'

export const rootReducer  = combineReducers({
    user : authReducer.reducer
  });
