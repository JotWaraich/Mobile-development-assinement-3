import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
const CalButton = ({ Icon, setdata }) => {
  const handlePress = () => {
    if (Icon === "Clear") {
      return setdata("");
    }
    if (Icon === "=") {
      return setdata((prev) => eval(prev));
    }

    setdata((prev) => prev + Icon);
  };
  return (
    <View>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>{Icon}</Text>
      </Pressable>
    </View>
  );
};

export default CalButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 90,
    width: 95,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
