import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
            headerStyle: {
                backgroundColor: "#ef683e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },
            headerTitle: "Home"
        }} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
            headerStyle: {
                backgroundColor: "#ef683e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },
            headerTitle: "Settings"
        }}
        />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
            activeBackgroundColor: "#ef683e",
            keyboardHidesTabBar: true,
        }}
      >
        <Tab.Screen 
            name="Home" 
            component={HomeStackScreen}
            options={{
                tabBarIcon: () => (
                    <AntDesign name="home" size={24} color="black" />
                )
            }} 
            />
        <Tab.Screen 
            name="Settings" 
            component={SettingsStackScreen}
            options={{
                tabBarIcon: () => (
                    <AntDesign name="setting" size={24} color="black" />
                )
            }}
             />
      </Tab.Navigator>
    </NavigationContainer>
  );
}