import React, { useState } from 'react';
import { View, Text, TextInput } from "react-native"

// TODO: convert to react-hook-form
export const QuickTab = () => {

  return (
  <View style={{ flex: 1, padding: 15, flexDirection: 'row', justifyContent: "space-between"}}>
    <TextInput placeholder='Item Name' style={{ marginRight: 20 }}/>
    <TextInput placeholder='Price' keyboardType='decimal-pad'/>
  </View>
)};