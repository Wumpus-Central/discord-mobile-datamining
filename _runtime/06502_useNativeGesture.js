// === Module 6502: useNativeGesture ===

// Module 6502 (useNativeGesture)
import ComposedGestureName from "ComposedGestureName" /* 6467 */;
import isGestureEnabled from "isGestureEnabled" /* 6476 */;
import useGesture from "useGesture" /* 6491 */;

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