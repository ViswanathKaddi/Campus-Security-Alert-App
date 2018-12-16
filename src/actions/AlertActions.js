import firebase from 'firebase';
//import firebase from '@firebase/app';
import '@firebase/auth';
import { Actions } from 'react-native-router-flux';
var mailgun = require("mailgun-js");

import {
  ALERT_UPDATE,
  ALERT_CREATE,
  ALERTS_FETCH_SUCCESS
} from './types';

const api_key = '2984b9d58bc1da1d0080c765443cd4aa-4412457b-e8791b50';
const domain = 'sandbox609bfd6ddbb54b6893397de8828729ae.mailgun.org';
const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

export const alertUpdate = ({ prop, value }) => {
  return {
    type: ALERT_UPDATE,
    payload: { prop, value }
  };
};

export const alertCreate = ({ emergencytype, location, description }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/alerts`)
  .push({ emergencytype, location, description })
  
  .then(() => {
    dispatch({ type: ALERT_CREATE });
    Actions.alertList({ type: 'reset' });
    var data = {
      from: 'Campus Security apps <postmaster@sandbox609bfd6ddbb54b6893397de8828729ae.mailgun.org>',
      to: firebase.database().ref(`/users/${currentUser.uid}/alerts`)
      .on('value', user),
      subject: emergencytype,
      html: '<p> <strong>Location</strong>: '+ location +'</p><p><strong>Description</strong>: '+ description +'</p> '
      
    };
    });
  };
};

mailgun.messages().send(data, function (error, body) {
  if(error){
      console.log(error);
  }
console.log(body);
});

export const alertsFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/alerts`)
      .on('value', snapshot => {
        dispatch({ type: ALERTS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
