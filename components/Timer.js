import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AppButton from './AppButton';
import Clock from './Clock';
import Colors from '../constants/Colors';

export default Timer = ({ time }) => {
  const [timerWorks, setTimerWorks] = useState(false);
  useEffect(() => {
    if (timerWorks) {
      const id = setInterval(inc, 1000);
      return () => clearInterval(id);
    }
  }, [timerWorks]);

  const [timerCount, setTimerCount] = useState(time * 60 * 1000);

  const stopTimer = () => {
    setTimerCount(time * 60 * 1000);
    setTimerWorks(false);
  };

  const inc = () => {
    setTimerCount((timerCount) => {
      if (timerCount >= 1000) {
        return timerCount - 1000;
      } else {
        stopTimer();
      }
    });
  };

  return (
    <View style={styles.timer}>
      <View style={styles.timerHolder}>
        <Clock time={timerCount} />
      </View>
      <View style={styles.buttonsContainer}>
        {!timerWorks ? (
          <AppButton
            text='start'
            onPress={() => setTimerWorks(true)}
            color={Colors.startColor}
            padding={40}
          />
        ) : (
          <AppButton
            text='pause'
            onPress={() => setTimerWorks(false)}
            color={Colors.pauseColor}
            padding={40}
          />
        )}
        <AppButton
          text='reset'
          onPress={stopTimer}
          color='transparent'
          padding={20}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timer: {
    flexGrow: 1,
  },
  timerHolder: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    alignItems: 'center',
  },
});
