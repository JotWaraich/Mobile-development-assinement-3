import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Calculator from "./screen/Calculator.jsx";
import Length from "./screen/Length.jsx";
import Weight from "./screen/Weight.jsx";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Calculator" component={Calculator} />
        <Drawer.Screen name="Length" component={Length} />
        <Drawer.Screen name="Weight" component={Weight} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
