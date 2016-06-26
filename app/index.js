/*
* @Author: Manraj Singh
* @Date:   2016-06-22 22:09:17
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-06-26 05:26:25
*/

'use strict';
import React from 'react';
import Routes from './config/routes';
import { Provider } from 'react-redux';
import configureStore from './stores';
const store = configureStore();

function StoreLocator(){
  return (
    <Provider store = {store}>
      <Routes />
    </Provider>
  );
}

export default StoreLocator;
