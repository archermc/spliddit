import React from "react";
import { Controller } from "react-hook-form";
import { KeyboardTypeOptions, TextInput } from "react-native";

type FormInputProps = {
  label: string; 
  control: any;
  name: string;
  keyboardType?: KeyboardTypeOptions;
  key?: string;
}

export const FormInput = ({ label, control, name, key, keyboardType = 'default' }: FormInputProps) => {
  <Controller
    control={control}
    render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        // style={styles.input}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
      />
    )}
    name={name}
  />
}