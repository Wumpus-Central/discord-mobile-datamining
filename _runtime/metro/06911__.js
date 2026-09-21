// _runtime/metro/06911__.js
import _modDef6912 from "06912__.js";
import get_ActivityIndicator from "00017__.js";

({ Animated, StyleSheet } = get_ActivityIndicator);
const animatedComponent = Animated.createAnimatedComponent(_modDef6912);

export const GestureDetectorType = {
  Native: 0,
  [0]: "Native",
  Virtual: 1,
  [1]: "Virtual",
  Intercepting: 2,
  [2]: "Intercepting",
};
export const AnimatedNativeDetector = animatedComponent;
export const nativeDetectorStyles = StyleSheet.create({ detector: { display: "contents" } });
