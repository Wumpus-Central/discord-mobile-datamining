// === Module 5687: useFlingGesture ===

// Module 5687 (useFlingGesture)
import ComposedGestureName from "ComposedGestureName" /* 5658 */;
import isGestureEnabled from "isGestureEnabled" /* 5667 */;
import useGesture from "useGesture" /* 5682 */;

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