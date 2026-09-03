// _runtime/05755_useNativeGesture.js
import ComposedGestureName from "05720_ComposedGestureName.js";
import isGestureEnabled from "05729_isGestureEnabled.js";
import useGesture from "05744_useGesture.js";

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
