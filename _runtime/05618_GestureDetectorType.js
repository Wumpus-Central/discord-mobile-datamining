// _runtime/05618_GestureDetectorType.js
import __INTERNAL_VIEW_CONFIGDefault from "metro/05619___INTERNAL_VIEW_CONFIG.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

({ Animated, StyleSheet } = get_ActivityIndicator);
const animatedComponent = Animated.createAnimatedComponent(__INTERNAL_VIEW_CONFIGDefault);

export const GestureDetectorType = { Native: 0, [0]: "Native", Virtual: 1, [1]: "Virtual", Intercepting: 2, [2]: "Intercepting" };
export const AnimatedNativeDetector = animatedComponent;
export const nativeDetectorStyles = StyleSheet.create({ detector: { display: "contents" } });