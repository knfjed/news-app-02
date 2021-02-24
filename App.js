import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{ width: 100, height: 100, borderRadius: 8 }}
            source={{ url: "https://picsum.photos/200" }}
          ></Image>
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={styles.newsSource}>React News</Text>
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
    backgroundColor: "gray",
    width: 100,
    borderRadius: 8,
  },
  rightContainer: {
    backgroundColor: "silver",
    borderWidth: 0.3,
    flex: 1,
    justifyContent: "space-between",
    borderRadius: 8,
    marginLeft: 10,
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
  newsSource: {
    fontSize: 12,
    color: "gray",
  },
});
