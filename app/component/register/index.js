import  React, { Component } from 'react';
import { 
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import styles from './style.js';

export default class login extends Component {
  state = { 
    test: this.props.test
   }
  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.titleContainer}>
            <Text style={styles.textTittle}>REGISTER</Text>
          </View>
          <View style={styles.scrollContent}>
            <TextInput
              placeholder={'Nama Depan'}
              style={styles.textInput}
              />
            <View/>
            <Text/>
            <TextInput
              placeholder={'Nama Belakang'}
              style={styles.textInput}
              />
            <View/>
            <Text/>
            <TextInput
              placeholder={'Alamat'}
              style={styles.textInput}
              />
            <View/>
            <Text/>
            <TextInput
              placeholder={'Nomer Ponsel'}
              style={styles.textInput}
              />
            <View/>
            <Text/>
            <TextInput
              placeholder={'username'}
              style={styles.textInput}
              />
            <View/>
            <Text/>
            <TextInput
              placeholder={'Email'}
              style={styles.textInput}
              />
            <View/>
            <Text/>
            <TextInput
              placeholder={'Password'}
              style={styles.textInput}
              secureTextEntry
              />
            <View/>
            <Text/>
            <TextInput
              placeholder={'Confirm Password'}
              style={styles.textInput}
              secureTextEntry
              />
            <View style={styles.buttonContainer}>
              <TouchableOpacity>
                <View style={styles.buttonRegister}>
                  <Text style={styles.textButton}>Accept</Text>
                </View>
              <View/>
              <Text/>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.buttonRegisterCancel}>
                  <Text style={styles.textButton}>Cancel</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
};