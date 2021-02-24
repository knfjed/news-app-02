import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "90%",
    borderRadius: 8,
    flexDirection: "row",
    shadowColor: "gainsboro",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
  },
  leftContainer: {
    backgroundColor: "gray",
    width: 100,
    borderRadius: 8,
  },
  rightContainer: {
    backgroundColor: "silver",
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

const ListItem = ({ thumnail, title, author }) => {
  return (
    <>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{ width: 100, height: 100, borderRadius: 8 }}
            source={{ url: thumnail }}
          ></Image>
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.text}>
            {title}
          </Text>
          <Text style={styles.newsSource}>{author}</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </>
  );
};

export default ListItem;
