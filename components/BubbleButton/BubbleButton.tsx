import React from "react";
import { Button, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  bubbleButtonContainer: { 
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20
  }
});

export const BubbleButton = ({ title, onPress }) => (
  <View style={styles.bubbleButtonContainer}>
    <Button onPress={onPress} title={title} color="white" />
  </View>
);