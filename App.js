import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import { NativeModules } from 'react-native';
const ScreenRecorderGang = NativeModules.ScreenRecorderGang;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  state = {
    screenStatu: '0'
  }

  checkIfRecord() {
    try {
      ScreenRecorderGang.get().then(isScreen => { this.setState({ screenStatu: isScreen}) });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 25, fontWeight: '800'}}>{this.state.screenStatu}</Text>
        <TouchableOpacity
          onPress={() => this.checkIfRecord()}
        >
          <Text>TEST</Text>
        </TouchableOpacity>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
