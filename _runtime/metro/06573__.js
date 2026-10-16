// _runtime/metro/06573__.js
import _modDef6574 from "06574__.js";
import get_ActivityIndicator from "00017__.js";

({ Animated, StyleSheet } = get_ActivityIndicator);
const animatedComponent = Animated.createAnimatedComponent(_modDef6574);

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
