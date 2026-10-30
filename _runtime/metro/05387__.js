// === Module 5387: ? ===

// Module 5387
import ComposedGestureName from "ComposedGestureName" /* 5357 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 5366 */;
import _mod5381 from "module_5381" /* 5381 */;

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

export function useLongPressGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_4;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp, map, transformLongPressProps);
  return _mod5381.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
}