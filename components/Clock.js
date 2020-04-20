import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default Clock = ({ time }) => {
  const getMinutes = (ms) => {
    const minString = `${Math.floor(ms / (60 * 1000))}`;
    return minString.length < 2 ? `0${minString}` : minString;
  };

  const getSeconds = (ms) => {
    const secString = `${(ms / 1000) % 60}`;
    return secString.length < 2 ? `0${secString}` : secString;
  };

  return (
    <View style={styles.timerHolder}>
      <Text style={styles.timerText}>
        {getMinutes(time)}:{getSeconds(time)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerHolder: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  timerText: {
    fontSize: 100,
  },
});
