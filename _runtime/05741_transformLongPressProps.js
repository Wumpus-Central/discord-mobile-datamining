// === Module 5741: transformLongPressProps ===

// Module 5741 (transformLongPressProps)
import ComposedGestureName from "ComposedGestureName" /* 5711 */;
import isGestureEnabled from "isGestureEnabled" /* 5720 */;
import useGesture from "useGesture" /* 5735 */;

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
arg5.useLongPressGesture = function useLongPressGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_4;
  }
  const clonedAndRemappedConfig = isGestureEnabled.useClonedAndRemappedConfig(tmp, map, transformLongPressProps);
  const obj = isGestureEnabled;
  return useGesture.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
};