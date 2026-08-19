// _runtime/06470_useManualGesture.js
import ComposedGestureName from "06436_ComposedGestureName.js";
import isGestureEnabled from "06445_isGestureEnabled.js";
import useGesture from "06460_useGesture.js";

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