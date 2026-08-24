// === Module 6490: map ===

// Module 6490 (map)
import ComposedGestureName from "ComposedGestureName" /* 6467 */;
import isGestureEnabled from "isGestureEnabled" /* 6476 */;
import useGesture from "useGesture" /* 6491 */;

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