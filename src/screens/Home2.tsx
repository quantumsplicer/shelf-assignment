import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import notificationManager from '../components/notificationConfig';
import { useNavigation } from '@react-navigation/native';

export const Home2 = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    notificationManager.configure();
  }, []);

  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          notificationManager.sendLocalNotification(
            'Notification Title',
            'Notification Message',
          );
        }}>
        <Text style={styles.text}>Trigger Notification</Text>
      </TouchableOpacity>
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
