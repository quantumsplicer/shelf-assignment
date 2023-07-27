import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Home1 } from '../screens/Home1';

export const FirstStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Hide header for all screens in the navigator
        cardStyle: { backgroundColor: 'white' }
      }}>
      <Stack.Screen name={'Home'} component={Home1}></Stack.Screen>
    </Stack.Navigator>
  );
};
