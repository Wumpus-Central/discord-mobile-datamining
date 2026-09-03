// _runtime/05750_transformLongPressProps.js
import ComposedGestureName from "05720_ComposedGestureName.js";
import isGestureEnabled from "05729_isGestureEnabled.js";
import useGesture from "05744_useGesture.js";

require = arg1;
const dependencyMap = arg6;
function transformLongPressProps(shouldCancelWhenOutside) {
  if (undefined === shouldCancelWhenOutside.shouldCancelWhenOutside) {
    shouldCancelWhenOutside.shouldCancelWhenOutside = true;
  }
  return shouldCancelWhenOutside;
}
const items = [
  ["minDuration", "minDurationMs"],
  ["maxDistance", "maxDist"],
];
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
