import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default AppButton = ({ text, onPress, color, padding }) => {
  const options = {
    text: text || 'click',
    color: color || styles.button.backgroundColor,
    padding: padding || styles.button.paddingVertical,
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: options.color,
          paddingVertical: options.padding,
        },
      ]}
    >
      <View>
        <Text style={styles.buttonText}>{options.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    paddingVertical: 30,
    backgroundColor: "grey",
  },
  buttonText: {
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 20,
  },
});
