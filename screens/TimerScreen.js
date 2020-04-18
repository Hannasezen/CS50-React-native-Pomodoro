import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from '../components/AppButton';
import Colors from '../constants/Colors';

export default function TimerScreen() {

  const startTimer = () => {
    console.log('startTimer');
  }

  const pauseTimer = () => {
    console.log('pauseTimer');
  }

  const stopTimer = () => {
    console.log('stopTimer');
  }

  return (
    <View style={styles.container}>
      <View style={styles.timerHolder}>

      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          text='start'
          onPress={startTimer}
          color={Colors.startColor}
        />
        <AppButton
          text='pause'
          onPress={pauseTimer}
          color={Colors.pauseColor}
        />
        <AppButton
          text='restart'
          onPress={stopTimer}
          color={Colors.stopColor}
        />
      </View>
    </View>
  );
}

TimerScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  timerHolder: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
