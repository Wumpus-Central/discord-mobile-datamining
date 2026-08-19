// === Module 6470: useManualGesture ===

// Module 6470 (useManualGesture)
import ComposedGestureName from "ComposedGestureName" /* 6436 */;
import isGestureEnabled from "isGestureEnabled" /* 6445 */;
import useGesture from "useGesture" /* 6460 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};
arg5.useManualGesture = function useManualGesture(closure_6) {
  let tmp = closure_6;
  if (closure_6 === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = isGestureEnabled.useClonedAndRemappedConfig(tmp);
  return useGesture.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};