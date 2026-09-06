// === Module 6748: useManualGesture ===

// Module 6748 (useManualGesture)
import ComposedGestureName from "ComposedGestureName" /* 6714 */;
import isGestureEnabled from "isGestureEnabled" /* 6723 */;
import useGesture from "useGesture" /* 6738 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};
arg5.useManualGesture = function useManualGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = isGestureEnabled.useClonedAndRemappedConfig(tmp);
  const obj = isGestureEnabled;
  return useGesture.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};