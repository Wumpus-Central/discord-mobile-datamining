// === Module 5713: useManualGesture ===

// Module 5713 (useManualGesture)
import ComposedGestureName from "ComposedGestureName" /* 5679 */;
import isGestureEnabled from "isGestureEnabled" /* 5688 */;
import useGesture from "useGesture" /* 5703 */;

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