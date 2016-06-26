/*
* @Author: Manraj Singh
* @Date:   2016-06-22 23:08:03
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-06-22 23:09:34
*/

'use strict';

import { combineReducers } from 'redux';
import location from './location';
import accounts from './accounts';
import store from './store';

export default combineReducers({
  location,
  accounts,
  store
});
