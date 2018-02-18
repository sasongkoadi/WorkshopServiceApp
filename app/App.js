import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Register from './component/register/index'

export default class app extends Component {
  state = {  }
  render() {
    return (
    <View>
      <Register/>
    </View>      
    );
  }
}
