// === Module 6459: map ===

// Module 6459 (map)
import ComposedGestureName from "ComposedGestureName" /* 6436 */;
import isGestureEnabled from "isGestureEnabled" /* 6445 */;
import useGesture from "useGesture" /* 6460 */;

require = arg1;
const dependencyMap = arg6;
const items = [["maxDistance", "maxDist"], ["maxDuration", "maxDurationMs"], ["maxDelay", "maxDelayMs"]];
const map = new Map(items);
let closure_3 = {};
arg5.useTapGesture = function useTapGesture(closure_6) {
  let tmp = closure_6;
  if (closure_6 === undefined) {
    tmp = closure_3;
  }
  const clonedAndRemappedConfig = isGestureEnabled.useClonedAndRemappedConfig(tmp, map);
  return useGesture.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};