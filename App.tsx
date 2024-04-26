import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
import { useCallback, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <Text> carregando ...</Text>;
  }
  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <StatusBar style="auto" />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
