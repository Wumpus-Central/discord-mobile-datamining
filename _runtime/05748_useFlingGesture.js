// === Module 5748: useFlingGesture ===

// Module 5748 (useFlingGesture)
import ComposedGestureName from "ComposedGestureName" /* 5719 */;
import isGestureEnabled from "isGestureEnabled" /* 5728 */;
import useGesture from "useGesture" /* 5743 */;

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