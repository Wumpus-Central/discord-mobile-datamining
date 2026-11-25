// === Module 5367: transformLongPressProps ===

// Module 5367 (transformLongPressProps)
import ComposedGestureName from "ComposedGestureName" /* 5334 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5343 */;
import _mod5360 from "module_5360" /* 5360 */;

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
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp, map, transformLongPressProps);
  return _mod5360.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
}