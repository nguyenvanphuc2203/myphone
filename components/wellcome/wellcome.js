import React, { Component } from 'react';
import styles from '../stylesheets';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  ActivityIndicator,
  AsyncStorage
} from 'react-native';

export default class Wellcome extends Component{

  componentWillMount(){
    setTimeout(()=>{
      this.props.navigation.navigate('Tabbar');
    },1000);
  }
  static navigationOptions = () => ({
    header: null
  })
  render(){
    return (
      <View style={styles.login}>
        <View style={{alignItems:'center'}}>
          <Image
            style={{width: 150, height: 150}}
            source={require('../images/logo.png')}
          />
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </View>
    )
  }
}
