/*
* @Author: Manraj Singh
* @Date:   2016-06-22 23:12:11
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-06-22 23:27:03
*/

'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
 
export default function configureStore (initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
};
