import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Timer from "../components/Timer";
import Colors from "../constants/Colors";

export default function TimerScreen() {
  return (
    <View style={styles.container}>
      <Timer />
    </View>
  );
}

TimerScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
