import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { RootStack, navTheme } from "../navigation";

export default function AppRoot() {
  return (
    <NavigationContainer theme={navTheme}>
      <RootStack />
    </NavigationContainer>
  );
}
