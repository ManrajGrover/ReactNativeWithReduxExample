/*
* @Author: Manraj Singh
* @Date:   2016-06-22 21:20:11
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-06-26 15:33:19
*/

'use strict';

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GuestActions from '../components/GuestActions';

class Home extends Component{
  availableActions = () => {
    return <GuestActions />
  }
  
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Store Locator</Text>
        <View>
          {this.availableActions()}
        </View>
      </View>
    )   
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent:"space-around",
    backgroundColor: '#f2f2f2',
  },
  heading: {
    fontSize: 30,
    fontWeight: "100",
  }
});

export default Home;
