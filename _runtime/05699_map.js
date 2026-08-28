// === Module 5699: map ===

// Module 5699 (map)
import ComposedGestureName from "ComposedGestureName" /* 5676 */;
import isGestureEnabled from "isGestureEnabled" /* 5685 */;
import useGesture from "useGesture" /* 5700 */;

require = arg1;
const dependencyMap = arg6;
const items = [["maxDistance", "maxDist"], ["maxDuration", "maxDurationMs"], ["maxDelay", "maxDelayMs"]];
const map = new Map(items);
let closure_3 = {};
arg5.useTapGesture = function useTapGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_3;
  }
  const clonedAndRemappedConfig = isGestureEnabled.useClonedAndRemappedConfig(tmp, map);
  const obj = isGestureEnabled;
  return useGesture.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};