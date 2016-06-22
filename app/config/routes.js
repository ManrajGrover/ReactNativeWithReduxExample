/*
* @Author: Manraj Singh
* @Date:   2016-06-22 21:52:56
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-06-22 22:53:21
*/

'use strict';
import React from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { Home } from '../components/';
 
function Routes(){
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" title="Home" component={Home} initial={true} hideNavBar={true} />
      </Scene>
    </Router>
  );
}

export default Routes;
