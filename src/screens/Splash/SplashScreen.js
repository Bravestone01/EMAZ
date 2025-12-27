import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, StatusBar, Animated, Easing } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";
import { spacing } from "../../theme";

function GoldTitle({ children, style }) {
  return (
    <MaskedView
      maskElement={
        <Text style={[styles.titleMask, style]}>{children}</Text>
      }
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["#FFF1A8", "#F4C430", "#C99700", "#FFE17A"]}
      >
        {/* same size as mask so gradient fills */}
        <Text style={[styles.titleMask, style, { opacity: 0 }]}>{children}</Text>
      </LinearGradient>
    </MaskedView>
  );
}

export default function SplashScreen({ navigation }) {
  const fade = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.98)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 500,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 500,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();

    const t = setTimeout({}, 1100);
    return () => clearTimeout(t);
  }, [navigation, fade, scale]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0E3B24" />

      <Animated.View style={[styles.centerBlock, { opacity: fade, transform: [{ scale }] }]}>
        {/* Transparent gift box image */}
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* GOLD gradient title */}
        <GoldTitle style={styles.title}>EMAZ</GoldTitle>

        {/* Clean tagline */}
        <Text style={styles.tagline}>Halal Gifting • Value • Rewards</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E3B24",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.xl,
  },

  centerBlock: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: -6,
  },

  logo: {
    width: 210,
    height: 210,
  },

  title: {
    fontFamily: "Cinzel-Bold", // ✅ will work after manual fix
    fontSize: 36,
    letterSpacing: 2.4,

    // subtle depth like logo
    textShadowColor: "rgba(0,0,0,0.55)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },

  titleMask: {
    // base mask style
    fontFamily: "Cinzel-Bold",
    fontSize: 36,
    letterSpacing: 2.4,
  },

  tagline: {
    marginTop: spacing.xs,
    fontFamily: "NotoSansArabic-Medium",
    fontSize: 12.5,
    color: "rgba(255,255,255,0.74)",
    textAlign: "center",
    letterSpacing: 0.4,
  },
});
