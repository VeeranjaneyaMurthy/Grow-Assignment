import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Tile = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.tileView, backgroundColor]}
  >
    <Text style={[textColor]}>{item.key}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  tileView: {
    height: 150,
    width: 100,
    margin: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Tile;
