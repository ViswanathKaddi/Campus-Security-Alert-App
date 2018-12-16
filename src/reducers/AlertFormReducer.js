import {
  ALERT_UPDATE,
  ALERT_CREATE
} from '../actions/types';

const INITIAL_STATE = {
   emergencytype: '',
   location: '',
   description: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALERT_UPDATE:
      //action.payload === { prop: 'emergencytype', value; 'robbery' }
      // const newState = {};
      // newState[action.payload.prop] = action.payload.value
      return { ...state, [action.payload.prop]: action.payload.value }
    case ALERT_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
