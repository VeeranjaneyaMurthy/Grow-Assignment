import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import TilesView from "./src/screens/TilesView";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Form from "./src/screens/Form";

const Stack = createStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="FormScreen"
              component={Form}
              options={{ title: "Pick your Lucky Number" }}
            />
            <Stack.Screen
              name="TilesScreen"
              component={TilesView}
              options={{ title: "Test your luck" }}
            />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
