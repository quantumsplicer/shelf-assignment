import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FirstStack} from './FirstStack';
import {SecondStack} from './SecondStack';
import {AntDesign} from '@expo/vector-icons';

export const navigationRef = React.createRef<any>();
export const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        initialRouteName="First"
        screenOptions={() => ({
          headerShown: false, // Hide header for all screens in the navigator
        })}>
        <Tab.Screen name={'First'} component={FirstStack}></Tab.Screen>
        <Tab.Screen name={'Second'} component={SecondStack}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
