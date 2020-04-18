import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppButton from "./AppButton";
import Colors from "../constants/Colors";

export default Timer = () => {
  const [timerCount, setTimerCount] = useState(0);
  const [timerWorks, setTimerWorks] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const inc = () => {
    setTimerCount((timerCount) => timerCount + 1);
  };

  const startTimer = () => {
    setIntervalId(setInterval(inc, 1000));
    setTimerWorks(true);
  };

  const pauseTimer = () => {
    clearInterval(intervalId);
    setTimerWorks(false);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setTimerCount(0);
    setTimerWorks(false);
  };
  
  return (
    <View style={styles.timer}>
      <View style={styles.timerHolder}>
        <Text style={styles.timerText}>{timerCount}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {!timerWorks ? (
          <AppButton
            text="start"
            onPress={startTimer}
            color={Colors.startColor}
          />
        ) : (
          <AppButton
            text="pause"
            onPress={pauseTimer}
            color={Colors.pauseColor}
          />
        )}
        <AppButton text="reset" onPress={stopTimer} color={Colors.stopColor} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timer: {
    flexGrow: 1,
  },
  timerText: {
    fontSize: 150,
  },
  timerHolder: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
