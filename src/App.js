import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
//import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {


componentWillMount() {
  const config = {
    apiKey: 'AIzaSyBTfYYwE-eCVCnBCSzLpdUB8g_zPtCqU7c',
    authDomain: 'securityapp-49e1c.firebaseapp.com',
    databaseURL: 'https://securityapp-49e1c.firebaseio.com',
    projectId: 'securityapp-49e1c',
    storageBucket: 'securityapp-49e1c.appspot.com',
    messagingSenderId: '868017785062'
  };
  firebase.initializeApp(config);
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;
