// === Module 6744: ? ===

// Module 6744
import ComposedGestureName from "ComposedGestureName" /* 6714 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6723 */;
import _mod6738 from "module_6738" /* 6738 */;

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
  return _mod6738.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
};