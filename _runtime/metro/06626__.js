// === Module 6626: ? ===

// Module 6626
import _modDef6627 from "module_6627" /* 6627 */;
import get_ActivityIndicator from "module_17" /* 17 */;

({ Animated, StyleSheet } = get_ActivityIndicator);
const animatedComponent = Animated.createAnimatedComponent(_modDef6627);

export const GestureDetectorType = { Native: 0, [0]: "Native", Virtual: 1, [1]: "Virtual", Intercepting: 2, [2]: "Intercepting" };
export const AnimatedNativeDetector = animatedComponent;
export const nativeDetectorStyles = StyleSheet.create({ detector: { display: "contents" } });