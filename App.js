import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}></View>
        <View style={styles.rightContainer}></View>
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
    justifyContent: "center",
  },
  itemContainer: {
    height: 100,
    width: "90%",
    // borderColor: none,
    // borderWidth: 0.5,
    borderRadius: 8,
    flexDirection: "row",
  },
  leftContainer: {
    backgroundColor: "red",
    width: 100,
    borderRadius: 8,
  },
  rightContainer: {
    backgroundColor: "blue",
    flex: 1,
    borderRadius: 8,
  },
});
