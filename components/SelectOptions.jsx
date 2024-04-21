import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";

const SelectOptions = ({ data, setSelected }) => {
  return (
    <View>
      <Pressable>
        <SelectList
          data={data}
          setSelected={setSelected}
          boxStyles={{
            height: 90,
            width: 95,
            borderRadius: 50,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
          inputStyles={{
            color: "white",
          }}
          dropdownStyles={{
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
          dropdownTextStyles={{ color: "white" }}
        />
      </Pressable>
    </View>
  );
};

export default SelectOptions;

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
