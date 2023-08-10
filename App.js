import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreens from "./screens/HomeScreens";
import StackNavigator from "./StackNavigator";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <>
    <Provider store={store}>
    <StackNavigator />
    </Provider>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#fff",
  },
});
