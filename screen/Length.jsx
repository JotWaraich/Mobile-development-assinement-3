import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CalButton from "../components/CalButton";
import SelectOptions from "../components/SelectOptions";

const Length = ({ navigation, route }) => {
  const handleCal = () => {
    if (selectedOne == "Kilometer" && selectedTwo == "Meter") {
      return setData(data * 1000);
    }
    if (selectedOne == "Kilometer" && selectedTwo == "Centimeter") {
      return setData(data * 100000);
    }
    if (selectedOne == "Kilometer" && selectedTwo == "Millimeter") {
      return setData(data * 1000000);
    }
    if (selectedOne == "Meter" && selectedTwo == "Kilometer") {
      return setData(data / 1000);
    }
    if (selectedOne == "Meter" && selectedTwo == "Centimeter") {
      return setData(data * 100);
    }
    if (selectedOne == "Meter" && selectedTwo == "Millimeter") {
      return setData(data * 1000);
    }
    if (selectedOne == "Centimeter" && selectedTwo == "Kilometer") {
      return setData(data / 100000);
    }
    if (selectedOne == "Centimeter" && selectedTwo == "Meter") {
      return setData(data / 100);
    }
    if (selectedOne == "Centimeter" && selectedTwo == "Millimeter") {
      return setData(data * 10);
    }
    if (selectedOne == "Millimeter" && selectedTwo == "Kilometer") {
      return setData(data / 1000000);
    }
    if (selectedOne == "Millimeter" && selectedTwo == "Meter") {
      return setData(data / 1000);
    }
    if (selectedOne == "Millimeter" && selectedTwo == "Centimeter") {
      return setData(data / 10);
    }
    alert("Please select the units");
  };
  const [data, setData] = useState("");
  const [selectedOne, setSelectedOne] = useState("");
  const [selectedTwo, setSelectedTwo] = useState("");
  const options = [
    { key: "Kilometer", value: "Kilometer" },
    { key: "Meter", value: "Meter" },
    { key: "Centimeter", value: "Centimeter" },
    { key: "Millimeter", value: "Millimeter" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text style={styles.inputText}>{data}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.row}>
          <SelectOptions data={options} setSelected={setSelectedOne} />
          <SelectOptions data={options} setSelected={setSelectedTwo} />
          <CalButton Icon={"Clear"} setdata={setData} />
        </View>
        <View style={styles.row}>
          <CalButton Icon={"7"} setdata={setData} />
          <CalButton Icon={"8"} setdata={setData} />
          <CalButton Icon={"9"} setdata={setData} />
        </View>
        <View style={styles.row}>
          <CalButton Icon={"4"} setdata={setData} />
          <CalButton Icon={"5"} setdata={setData} />
          <CalButton Icon={"6"} setdata={setData} />
        </View>
        <View style={styles.row}>
          <CalButton Icon={"1"} setdata={setData} />
          <CalButton Icon={"2"} setdata={setData} />
          <CalButton Icon={"3"} setdata={setData} />
        </View>
        <View style={styles.row}>
          <CalButton Icon={"."} setdata={setData} />
          <CalButton Icon={"0"} setdata={setData} />
          <Pressable onPress={handleCal} onTouchStart={handleCal}>
            <CalButton Icon={"="} setdata={setData} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Length;

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
