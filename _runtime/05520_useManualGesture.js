// _runtime/05520_useManualGesture.js
import { ComposedGestureName } from "05486_ComposedGestureName.js";
import { isGestureEnabled } from "05495_isGestureEnabled.js";
import { useGesture } from "05510_useGesture.js";
const require = arg1;
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