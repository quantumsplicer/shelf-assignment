import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Home2 } from '../screens/Home2';
import { NavToScreen } from '../screens/NavToScreen';

export const SecondStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Hide header for all screens in the navigator
        cardStyle: { backgroundColor: 'white' }
      }}>
      <Stack.Screen name={'Home'} component={Home2}></Stack.Screen>
      <Stack.Screen name={'navToScreen'} component={NavToScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};
