import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { Dimensions, Image, StyleSheet, Text } from "react-native";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

//////////////////////////////////////////////////////
// 🔵 PARTÍCULAS FLUTUANTES REAIS
//////////////////////////////////////////////////////
function Particle({ x, y, size, delay }) {
  const float = useSharedValue(0);
  const opacity = useSharedValue(0.15);

  useEffect(() => {
    float.value = withRepeat(
      withTiming(1, {
        duration: 6000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );

    opacity.value = withRepeat(
      withTiming(0.35, { duration: 4000 }),
      -1,
      true
    );
  }, []);

  const style = useAnimatedStyle(() => {
    const translateY = interpolate(float.value, [0, 1], [-40, 40]);

    return {
      transform: [{ translateY }],
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View
      style={[
        styles.particle,
        style,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          left: x,
          top: y,
        },
      ]}
    />
  );
}

//////////////////////////////////////////////////////
// 🚀 HOME
//////////////////////////////////////////////////////
export default function Home() {
  const float = useSharedValue(0);
  const fade = useSharedValue(0);

  useEffect(() => {
    fade.value = withTiming(1, { duration: 2000 });

    float.value = withRepeat(
      withTiming(1, {
        duration: 5000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );
  }, []);

  const animatedCard = useAnimatedStyle(() => {
    const translateY = interpolate(float.value, [0, 1], [-12, 12]);
    const scale = interpolate(float.value, [0, 1], [1, 1.04]);

    return {
      opacity: fade.value,
      transform: [{ translateY }, { scale }],
    };
  });

  return (
    <LinearGradient
      colors={["#020617", "#0B1120", "#020617"]}
      style={styles.container}
    >
      {/* 🌌 PARTÍCULAS */}
      {Array.from({ length: 16 }).map((_, i) => (
        <Particle
          key={i}
          x={Math.random() * width}
          y={Math.random() * height}
          size={80 + Math.random() * 140}
          delay={i * 300}
        />
      ))}

      {/* 💎 CARD CENTRAL */}
      <Animated.View style={[styles.cardWrapper, animatedCard]}>
        <BlurView intensity={70} tint="dark" style={styles.card}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.subtitle}>
            Conectando você com seu equilíbrio emocional.
          </Text>
        </BlurView>
      </Animated.View>
    </LinearGradient>
  );
}

//////////////////////////////////////////////////////
// 🎨 STYLES
//////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },

  cardWrapper: {
    zIndex: 10,
  },

  card: {
    padding: 55,
    borderRadius: 35,
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
  },

  logo: {
    width: 250,
    height: 250,
    marginBottom: 25,
    shadowColor: "#3B82F6",
    shadowOpacity: 1,
    shadowRadius: 50,
  },

  subtitle: {
    fontSize: 16,
    color: "#E5E7EB",
    textAlign: "center",
    opacity: 0.9,
  },

  particle: {
    position: "absolute",
    backgroundColor: "#3B82F6",
    opacity: 0.2,
  },
});
