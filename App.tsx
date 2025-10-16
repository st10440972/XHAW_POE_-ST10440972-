import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import FacultiesScreen from "./screens/FacultiesScreen";
import FeeCalculatorScreen from "./screens/FeeCalculatorScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Faculties" component={FacultiesScreen} />
        <Stack.Screen name="FeeCalculator" component={FeeCalculatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
