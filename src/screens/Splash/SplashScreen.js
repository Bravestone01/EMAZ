import React, { useEffect, useRef } from "react";
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  Animated,
  ActivityIndicator,
} from "react-native";

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const fade = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    });

    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.15,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
      ])
    );

    fade.start();
    loop.start();

    const timer = setTimeout(() => {
      navigation.replace("Welcome");
    }, 3000);

    return () => {
      clearTimeout(timer);
      loop.stop();
    };
  }, [navigation, fadeAnim, pulseAnim]);

  return (
    <View style={styles.container}>
      <StatusBar
        hidden
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* Full Screen Image */}
      <Animated.View style={{ opacity: fadeAnim, ...StyleSheet.absoluteFillObject }}>
        <Image
          source={require("../../assets/images/splash_portrait.png")}
          style={styles.splashImage}
          resizeMode="cover"
        />
      </Animated.View>

      {/* Loading Indicator */}
      <Animated.View
        style={[
          styles.loaderContainer,
          { transform: [{ scale: pulseAnim }] },
        ]}
      >
        <ActivityIndicator size="small" color="#D4AF37" />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1220",
  },
  splashImage: {
    width: "100%",
    height: "100%",
  },
  loaderContainer: {
    position: "absolute",
    bottom: 60,
    alignSelf: "center",
    backgroundColor: "rgba(212,175,55,0.15)",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(212,175,55,0.3)",
  },
});