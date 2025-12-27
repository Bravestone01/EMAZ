import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>
        EMAZ is initializing. Next screens will be plugged after navigation & theme
        setup is stable.
      </Text>

      <Pressable
        accessibilityRole="button"
        style={styles.button}
        onPress={() => {
          // Placeholder route for now; we'll replace when Home/Auth stack is added.
          // Keeping it no-op to avoid navigation errors.
        }}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.app,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.lg,
  },
  logo: {
    width: 170,
    height: 170,
    marginBottom: spacing.lg,
  },
  title: {
    ...typography.h2,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    ...typography.body,
    color: colors.text.muted,
    textAlign: "center",
    marginBottom: spacing.xl,
  },
  button: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: 999,
    backgroundColor: colors.brand.accent,
  },
  buttonText: {
    ...typography.button,
    color: "#0B1220",
  },
});
