import React from 'react';
import { View, Button, Platform, StyleSheet } from 'react-native';
import { ScreenName } from '../../shared/enums/ScreenName.enum';
import { BubbleButton } from '../../components/BubbleButton/BubbleButton';
import { Title } from '../../components/Title';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5ea5d1',
  },
  marginBottom: {
    marginBottom: 10
  },
  titleContainer: {
    height: "20%",
    paddingTop: Platform.OS === 'ios' ? 40 : 30,
    flex: 1,
    alignItems: "center"
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: "10%",
    marginRight: "10%",
    height: "80%",
  }
});

export const Home = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Title>Spliddit</Title>
    </View>
    <View style={styles.buttonsContainer}>
      <View style={styles.marginBottom}>
        <BubbleButton title="Quick Tab" onPress={() => navigation.navigate(ScreenName.QuickTabScreen)} />
      </View>
      <View>
        <Button title="Start Tab" onPress={() => navigation.navigate(ScreenName.StartTabScreen)} />
      </View>
    </View>
  </View>
);
