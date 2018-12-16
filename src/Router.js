import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import AlertList from './components/AlertList';
import AlertCreate from './components/AlertCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 55 }}>
      <Scene key="root" hideNavbar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" initial />
        </Scene>
        <Scene key="main">
          <Scene
          rightTitle="New Alert"
          onRight={() => Actions.alertCreate()}
          key="alertList"
          component={AlertList}
          title="Your Alert List"
          />
        <Scene key="alertCreate" component={AlertCreate} title="Create Alert" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
