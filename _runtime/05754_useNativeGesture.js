// === Module 5754: useNativeGesture ===

// Module 5754 (useNativeGesture)
import ComposedGestureName from "ComposedGestureName" /* 5719 */;
import isGestureEnabled from "isGestureEnabled" /* 5728 */;
import useGesture from "useGesture" /* 5743 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};
arg5.useNativeGesture = function useNativeGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = isGestureEnabled.useClonedAndRemappedConfig(tmp);
  const obj = isGestureEnabled;
  return useGesture.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};