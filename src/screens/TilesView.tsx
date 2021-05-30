import React, { useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { missMatch, resetGame } from "../redux/actions";
import {
  NUMBER_OF_COLUMNS,
  OOPS_TRYAGAIN,
  WIN_MESSAGE,
  TRY_AGAIN,
  FORM_SCREEN,
} from "../constants/constants";
import Tile from "../Tile";
import { LIST_ITEM, GAME_STATE } from "../constants/Types";

const TilesView = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const numberList = useSelector((state: GAME_STATE) => state.numberList);
  const luckyNumber = useSelector((state: GAME_STATE) => state.luckyNumber);
  const numberOfChances = useSelector(
    (state: GAME_STATE) => state.numberOfChances
  );
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }: { item: LIST_ITEM }) => {
    const backgroundColor = item.key === selectedId ? "green" : "black";
    const color = item.key === selectedId ? "white" : "black";

    const onPressTile = (item: { item: LIST_ITEM }) => {
      setSelectedId(item.key);
      if (!numberOfChances) {
        Alert.alert(OOPS_TRYAGAIN);
        dispatch(resetGame());
        navigation.navigate(FORM_SCREEN);
        return;
      }
      if (item.key === luckyNumber) {
        Alert.alert(WIN_MESSAGE);
        dispatch(resetGame());
        navigation.navigate(FORM_SCREEN);
      } else {
        Alert.alert(TRY_AGAIN);
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
