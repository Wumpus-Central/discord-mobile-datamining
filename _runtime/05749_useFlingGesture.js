// === Module 5749: useFlingGesture ===

// Module 5749 (useFlingGesture)
import ComposedGestureName from "ComposedGestureName" /* 5720 */;
import isGestureEnabled from "isGestureEnabled" /* 5729 */;
import useGesture from "useGesture" /* 5744 */;

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