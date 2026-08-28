// === Module 5710: useManualGesture ===

// Module 5710 (useManualGesture)
import ComposedGestureName from "ComposedGestureName" /* 5676 */;
import isGestureEnabled from "isGestureEnabled" /* 5685 */;
import useGesture from "useGesture" /* 5700 */;

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