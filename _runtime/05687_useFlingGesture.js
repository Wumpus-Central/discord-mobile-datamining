// _runtime/05687_useFlingGesture.js
import ComposedGestureName from "05658_ComposedGestureName.js";
import isGestureEnabled from "05667_isGestureEnabled.js";
import useGesture from "05682_useGesture.js";

require = arg1;
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