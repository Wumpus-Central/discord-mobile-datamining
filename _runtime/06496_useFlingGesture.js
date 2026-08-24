// === Module 6496: useFlingGesture ===

// Module 6496 (useFlingGesture)
import ComposedGestureName from "ComposedGestureName" /* 6467 */;
import isGestureEnabled from "isGestureEnabled" /* 6476 */;
import useGesture from "useGesture" /* 6491 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};
arg5.useFlingGesture = function useFlingGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = isGestureEnabled.useClonedAndRemappedConfig(tmp);
  const obj = isGestureEnabled;
  return useGesture.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};