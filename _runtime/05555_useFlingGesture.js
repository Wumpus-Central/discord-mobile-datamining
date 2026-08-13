// _runtime/05555_useFlingGesture.js
import { ComposedGestureName } from "05526_ComposedGestureName.js";
import { isGestureEnabled } from "05535_isGestureEnabled.js";
import { useGesture } from "05550_useGesture.js";
const require = arg1;
const dependencyMap = arg6;
let closure_2 = {};
arg5.useFlingGesture = function useFlingGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = isGestureEnabled.useClonedAndRemappedConfig(tmp);
  const obj = isGestureEnabled;
  return useGesture.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};