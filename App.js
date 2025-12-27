import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { Platform, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SystemNavigationBar from "react-native-system-navigation-bar";

import AppRoot from "./src/app/AppRoot";

export default function App() {
  useEffect(() => {
    if (Platform.OS !== "android") return;

    const t = setTimeout(() => {
      Promise.resolve(SystemNavigationBar.navigationHide()).catch(() => {});
      Promise.resolve(SystemNavigationBar.immersive()).catch(() => {});
    }, 300);

    return () => clearTimeout(t);
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar hidden />
      <AppRoot />
    </SafeAreaProvider>
  );
}
