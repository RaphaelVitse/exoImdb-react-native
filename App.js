import {
  SafeAreaView,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

import Constants from "expo-constants";
import logoImdb from "./assets/img/logoImdb.png";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={require("./assets/img/logoImdb.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text>hello !</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flexStart",
  },
});
