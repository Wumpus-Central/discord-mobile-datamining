// _runtime/metro/06999__.js
import _modDef7000 from "07000__.js";
import get_ActivityIndicator from "00017__.js";

({ Animated, StyleSheet } = get_ActivityIndicator);
const animatedComponent = Animated.createAnimatedComponent(_modDef7000);

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
