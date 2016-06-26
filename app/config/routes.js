/*
* @Author: Manraj Singh
* @Date:   2016-06-22 21:52:56
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-06-26 15:37:18
*/

'use strict';
import React from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Home from '../components/Home';
import Login from '../components/Login';
import Signup from '../components/Signup';

 
function Routes(){
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" title="Home" component={Home} initial={true} hideNavBar={true} />
        <Scene key="login" title="Login" component={Login} />
        <Scene key="signup" title="Signup" component={Signup} />
      </Scene>
    </Router>
  );
}

export default Routes;
