import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import landingPage from './src/screens/landingPage';
import login from './src/screens/login';
import regist from './src/screens/regist';
import regist2 from './src/screens/regist2';

const Stack = createNativeStackNavigator();
function telcoAppv2() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Landing" component={landingPage} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Regist" component={regist} />
        <Stack.Screen name="Regist2" component={regist2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default telcoAppv2;
