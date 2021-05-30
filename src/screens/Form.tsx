import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { shuffleTiles, startGame } from "../redux/actions";

const Form = ({ navigation }: any) => {
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
          style={styles.button}
          title={"START"}
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
  button: {
    height: 20,
  },

  input: {
    margin: 12,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderWidth: 1,
  },
});
