import { useState, forwardRef, useImperativeHandle, FC } from "react";
import { View, TextInput, ViewStyle, StyleProp, TextStyle } from "react-native";

import type { DefaultTextInputProps } from "./types";



const DefaultTextInput = forwardRef(
  (
    { onSubmit, containerStyle, textInputStyle, placeholder }: DefaultTextInputProps,
    ref
  ) => {
    const [text, setText] = useState("");

    useImperativeHandle(ref, () => ({
      getText: () => text,
    }));

    return (
      <View style={containerStyle}>
        <TextInput
          style={textInputStyle}
          onChangeText={setText}
          value={text}
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={onSubmit}
          placeholder={placeholder}
        />
      </View>
    );
  }
);

export default DefaultTextInput;
