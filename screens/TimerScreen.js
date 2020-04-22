import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import PomodoroTimer from "../components/PomodoroTimer";

export default function TimerScreen() {
  return (
    <View style={styles.container}>
      <PomodoroTimer />
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
