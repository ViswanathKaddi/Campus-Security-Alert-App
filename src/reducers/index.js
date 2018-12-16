import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AlertFormReducer from './AlertFormReducer';
import AlertReducer from './AlertReducer';

export default combineReducers({
  auth: AuthReducer,
  alertForm: AlertFormReducer,
  alerts: AlertReducer
});
