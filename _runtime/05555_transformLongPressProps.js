// _runtime/05555_transformLongPressProps.js
import { ComposedGestureName } from "05525_ComposedGestureName.js";
import { isGestureEnabled } from "05534_isGestureEnabled.js";
import { useGesture } from "05549_useGesture.js";
const require = arg1;
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