import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CalButton from "../components/CalButton";

export default function Calculator({ navigation, route }) {
  const [data, setData] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text style={styles.inputText}>{data}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.row}>
          <CalButton Icon={"("} setdata={setData} />
          <CalButton Icon={")"} setdata={setData} />
          <CalButton Icon={"%"} setdata={setData} />
          <CalButton Icon={"Clear"} setdata={setData} />
        </View>
        <View style={styles.row}>
          <CalButton Icon={"7"} setdata={setData} />
          <CalButton Icon={"8"} setdata={setData} />
          <CalButton Icon={"9"} setdata={setData} />
          <CalButton Icon={"/"} setdata={setData} />
        </View>
        <View style={styles.row}>
          <CalButton Icon={"4"} setdata={setData} />
          <CalButton Icon={"5"} setdata={setData} />
          <CalButton Icon={"6"} setdata={setData} />
          <CalButton Icon={"*"} setdata={setData} />
        </View>
        <View style={styles.row}>
          <CalButton Icon={"1"} setdata={setData} />
          <CalButton Icon={"2"} setdata={setData} />
          <CalButton Icon={"3"} setdata={setData} />
          <CalButton Icon={"-"} setdata={setData} />
        </View>
        <View style={styles.row}>
          <CalButton Icon={"."} setdata={setData} />
          <CalButton Icon={"0"} setdata={setData} />
          <CalButton Icon={"+"} setdata={setData} />
          <CalButton Icon={"="} setdata={setData} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",

    backgroundColor: "gray",
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  buttons: {
    display: "flex",
    padding: 10,
    width: "100%",
    gap: 20,
    marginBottom: 30,
    alignItems: "center",
  },
  input: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
    backgroundColor: "black",
    color: "white",
    minHeight: 100,
    marginBottom: 10,
  },
  inputText: {
    color: "white",
    fontSize: 30,
    borderColor: "white",
    borderWidth: 1,
    padding: 1,
    paddingHorizontal: 1,
    minHeight: 50,
    width: "100%",
  },
});
