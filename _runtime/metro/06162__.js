// === Module 6162: ? ===

// Module 6162
import ComposedGestureName from "ComposedGestureName" /* 6132 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6141 */;
import _mod6156 from "module_6156" /* 6156 */;

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

export const useLongPressGesture = function useLongPressGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_4;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp, map, transformLongPressProps);
  return _mod6156.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
};