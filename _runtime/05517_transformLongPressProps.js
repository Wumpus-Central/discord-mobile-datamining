// === Module 5517: transformLongPressProps ===

// Module 5517 (transformLongPressProps)
import ComposedGestureName from "ComposedGestureName" /* 5484 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5493 */;
import _mod5510 from "module_5510" /* 5510 */;

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
  return _mod5510.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
}