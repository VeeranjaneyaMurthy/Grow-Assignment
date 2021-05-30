import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  headerText: string;
}

const Header = ({ headerText }: HeaderProps) => {
  return (
    <View>
      <Text style={styles.header}>{headerText}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "yellow",
    margin: 10,
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
