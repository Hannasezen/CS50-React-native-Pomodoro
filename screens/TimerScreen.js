import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { MonoText } from '../components/StyledText';

export default function TimerScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container} contentContainerStyle={styles.contentContainer}>
        
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
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
