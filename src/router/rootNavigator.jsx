import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {DISCOVER, HOME} from '../utils/routes';
import Discover from '../screens/Discover';
import ItemScreen from '../screens/ItemScreen';
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={HOME}
        component={HomeScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={DISCOVER}
        component={Discover}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'ItemScreen'}
        component={ItemScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
