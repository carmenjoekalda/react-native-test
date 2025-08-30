import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './src/screens/SignIn';
import Example from './src/screens/Example';

const Stack = createNativeStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: "Sign In" }}
      />
      <Stack.Screen
        name="Example"
        component={Example}
        options={{ title: "Success!" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
