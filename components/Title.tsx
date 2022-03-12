import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  title: {
    fontFamily: 'nunito-extra-light',
    fontSize: 60,
    color: 'white'
  }
});

export const Title = ({ children }) => (
  <View>
    <Text style={styles.title}>{children}</Text>
  </View>
);

