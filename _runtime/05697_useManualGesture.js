// === Module 5697: useManualGesture ===

// Module 5697 (useManualGesture)
import ComposedGestureName from "ComposedGestureName" /* 5663 */;
import isGestureEnabled from "isGestureEnabled" /* 5672 */;
import useGesture from "useGesture" /* 5687 */;

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