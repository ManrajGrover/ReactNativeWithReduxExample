/*
* @Author: Manraj Singh
* @Date:   2016-06-22 21:20:11
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-06-22 21:21:14
*/

'use strict';

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Home extends Component{
  render(){
    return (
      <View style={styles.container}>
          <Text>Hello World</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent:"space-between",
    backgroundColor: '#f2f2f2',
    paddingTop:40,
  }
});

export default Home;
