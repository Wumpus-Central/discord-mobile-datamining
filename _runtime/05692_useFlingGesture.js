// === Module 5692: useFlingGesture ===

// Module 5692 (useFlingGesture)
import ComposedGestureName from "ComposedGestureName" /* 5663 */;
import isGestureEnabled from "isGestureEnabled" /* 5672 */;
import useGesture from "useGesture" /* 5687 */;

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