import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { colors, spacing, typography, shadows } from "../../theme";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/logo.png")} style={styles.logo} resizeMode="contain" />

      <Text style={styles.title}>Welcome to EMAZ</Text>
      <Text style={styles.subtitle}>
        A halal value & gifting ecosystem — simple, trusted, and rewarding.
      </Text>

      <Pressable style={({ pressed }) => [styles.button, pressed && { opacity: 0.92 }]} onPress={() => {}}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>

      <Text style={styles.footer}>By continuing, you agree to EMAZ terms & privacy policy.</Text>
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
    padding: spacing.xl,
  },
  logo: { width: 180, height: 180, marginBottom: spacing.lg },
  title: { ...typography.display2, color: colors.text.primary, textAlign: "center" },
  subtitle: {
    marginTop: spacing.sm,
    ...typography.body,
    color: colors.text.secondary,
    textAlign: "center",
    marginBottom: spacing.xl,
    maxWidth: 320,
  },
  button: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: 999,
    backgroundColor: colors.brand.accent,
    ...shadows.sm,
  },
  buttonText: { ...typography.button, color: colors.text.onAccent },
  footer: {
    marginTop: spacing.lg,
    ...typography.caption,
    color: colors.text.muted,
    textAlign: "center",
    maxWidth: 340,
  },
});
