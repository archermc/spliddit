import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ScreenName } from '../shared/enums/ScreenName.enum';

export const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={{color: 'white'}}>Two Big buttons here that show options.</Text>
    <View style={styles.firstButtonContainer}>
      <Button title="Quick Tab" onPress={() => navigation.navigate(ScreenName.QuickTabScreen)} />
    </View>
    <View>
      <Button title="Start Tab" onPress={() => navigation.navigate(ScreenName.StartTabScreen)}/>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5ea5d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstButtonContainer: {
    marginBottom: 10
  }
});