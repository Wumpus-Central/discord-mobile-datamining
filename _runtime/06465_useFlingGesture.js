// _runtime/06465_useFlingGesture.js
import { ComposedGestureName } from "06436_ComposedGestureName.js";
import { isGestureEnabled } from "06445_isGestureEnabled.js";
import { useGesture } from "06460_useGesture.js";
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