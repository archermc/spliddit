import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.button}>Two Big buttons here that show options.</Text>
      <Text style={styles.button}>Quick Tab</Text>
      <Text style={styles.button}>Start Tab</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5ea5d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: 'white'
  }
});
