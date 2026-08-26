// === Module 5693: useNativeGesture ===

// Module 5693 (useNativeGesture)
import ComposedGestureName from "ComposedGestureName" /* 5658 */;
import isGestureEnabled from "isGestureEnabled" /* 5667 */;
import useGesture from "useGesture" /* 5682 */;

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