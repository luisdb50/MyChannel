/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
//import Init from './components/App';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/welcome/Home';
import Home2 from './src/screens/welcome/Home2';
import Home3 from './src/screens/welcome/Home3';
import Home4 from './src/screens/welcome/Home4';
import Login from './src/screens/Login';


const Stack = createStackNavigator(
  
);

const App: () => Node = () => {

  const configNavigator = {
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [{
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          }],
        },
      };
    }, 
    headerShown: false,
    transitionSpec: {
      open: { config: { duration: 350},},
      close: { config: { duration: 350},},
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={configNavigator}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Home2" component={Home2}/>
        <Stack.Screen name="Home3" component={Home3}/>
        <Stack.Screen name="Home4" component={Home4}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
