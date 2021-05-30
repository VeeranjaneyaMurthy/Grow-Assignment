import React, { useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { missMatch, resetGame } from "../actions";
import { NUMBER_OF_COLUMNS } from "../constants";
import Tile from "./Tile";

const TilesView = ({ navigation }) => {
  const dispatch = useDispatch();
  const numberList = useSelector((state) => state.numberList);
  const luckyNumber = useSelector((state) => state.luckyNumber);
  const numberOfChances = useSelector((state) => state.numberOfChances);
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.key === selectedId ? "green" : "black";
    const color = item.key === selectedId ? "white" : "black";
    const onPressTile = (item) => {
      setSelectedId(item.key);
      if (!numberOfChances) {
        Alert.alert("Oops, you are out of changes. Try again");
        dispatch(resetGame());
        navigation.navigate("FormScreen");
        return;
      }
      if (item.key === luckyNumber) {
        Alert.alert("Congratulation, you are lucky");
        dispatch(resetGame());
        navigation.navigate("FormScreen");
      } else {
        Alert.alert("Not a match try again");
        dispatch(missMatch());
      }
    };

    return (
      <Tile
        item={item}
        onPress={() => onPressTile(item)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={numberList}
        numColumns={NUMBER_OF_COLUMNS}
        renderItem={renderItem}
      />
    </View>
  );
};

export default TilesView;

const styles = StyleSheet.create({
  list: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  tileView: {
    height: 150,
    width: 100,
    margin: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    margin: 12,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderWidth: 1,
  },
});
