import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import notificationManager from '../components/notificationConfig';

export const NavToScreen = () => {
  
  useEffect(() => {
    notificationManager.configure();
  }, []);

  return (
    <View style={styles.rootContainer}>
      <View
        style={styles.buttonContainer}>
        <Text style={styles.text}>Oh yeah!! It got navigated.</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
