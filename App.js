import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Saúde+</Text>
      <View style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  welcome: {
    fontSize: 20,
    textAlign:'center',
    margin: 10,
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: "#F00"
  }
});

// import React from 'react';
// import {Platform, StyleSheet, Text, View } from 'react-native';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to ReactNative!</Text>
//         <View style={styles.box} />
//       </View>
//     )
//   }
// }
