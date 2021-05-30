import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setLuckyNumber, shuffleTiles, startGame } from "../actions";

const Form = ({ navigation }) => {
  const dispatch = useDispatch();

  const [luckyNumber, setLuckyNumber] = useState("");

  const handleStartPress = () => {
    dispatch(startGame(luckyNumber));
    navigation.navigate("TilesScreen");
    dispatch(shuffleTiles());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="enter 1-9"
        onChangeText={(text) => setLuckyNumber(text)}
        defaultValue={""}
        keyboardType={"numeric"}
      />
      {
        <Button
          style={{ height: 20 }}
          title={"START"}
          color={"orange"}
          onPress={handleStartPress}
        />
      }
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
