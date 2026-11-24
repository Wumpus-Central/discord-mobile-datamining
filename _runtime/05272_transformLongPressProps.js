// === Module 5272: transformLongPressProps ===

// Module 5272 (transformLongPressProps)
import ComposedGestureName from "ComposedGestureName" /* 5239 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5248 */;
import _mod5265 from "module_5265" /* 5265 */;

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
  return _mod5265.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
}