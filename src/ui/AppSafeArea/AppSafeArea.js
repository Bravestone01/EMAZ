import React from "react";
import { View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../theme";

export default function AppSafeArea({
  children,
  backgroundColor = colors.background.app,
  statusBarHidden = true,
}) {
  return (
    <View style={{ flex: 1, backgroundColor }}>
      <StatusBar hidden={statusBarHidden} />
      <SafeAreaView style={{ flex: 1, backgroundColor }}>
        {children}
      </SafeAreaView>
    </View>
  );
}
