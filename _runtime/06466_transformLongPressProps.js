// === Module 6466: transformLongPressProps ===

// Module 6466 (transformLongPressProps)
import ComposedGestureName from "ComposedGestureName" /* 6436 */;
import isGestureEnabled from "isGestureEnabled" /* 6445 */;
import useGesture from "useGesture" /* 6460 */;

require = arg1;
const dependencyMap = arg6;
function transformLongPressProps(shouldCancelWhenOutside) {
  if (undefined === shouldCancelWhenOutside.shouldCancelWhenOutside) {
    shouldCancelWhenOutside.shouldCancelWhenOutside = true;
  }
  return shouldCancelWhenOutside;
}
const items = [["minDuration", "minDurationMs"], ["maxDistance", "maxDist"]];
const map = new Map(items);
let closure_4 = {};
arg5.useLongPressGesture = function useLongPressGesture(closure_6) {
  let tmp = closure_6;
  if (closure_6 === undefined) {
    tmp = closure_4;
  }
  const clonedAndRemappedConfig = isGestureEnabled.useClonedAndRemappedConfig(tmp, map, transformLongPressProps);
  return useGesture.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
};