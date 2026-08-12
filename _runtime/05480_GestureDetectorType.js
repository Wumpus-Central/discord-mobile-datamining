// _runtime/05480_GestureDetectorType.js
import get_ActivityIndicator from "get ActivityIndicator";
import animatedComponent from "__INTERNAL_VIEW_CONFIG";

let Animated;
let StyleSheet;
({ Animated, StyleSheet } = get_ActivityIndicator);

export const GestureDetectorType = { Native: 0, [0]: "Native", Virtual: 1, [1]: "Virtual", Intercepting: 2, [2]: "Intercepting" };
export const AnimatedNativeDetector = animatedComponent;
export const nativeDetectorStyles = StyleSheet.create({ detector: { display: "contents" } });