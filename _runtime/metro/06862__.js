// === Module 6862: ? ===

// Module 6862
import _modDef6863 from "module_6863" /* 6863 */;
import get_ActivityIndicator from "module_17" /* 17 */;

({ Animated, StyleSheet } = get_ActivityIndicator);
const animatedComponent = Animated.createAnimatedComponent(_modDef6863);

export const GestureDetectorType = { Native: 0, [0]: "Native", Virtual: 1, [1]: "Virtual", Intercepting: 2, [2]: "Intercepting" };
export const AnimatedNativeDetector = animatedComponent;
export const nativeDetectorStyles = StyleSheet.create({ detector: { display: "contents" } });