// === Module 5147: transformLongPressProps ===

// Module 5147 (transformLongPressProps)
import ComposedGestureName from "ComposedGestureName" /* 5114 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5123 */;
import _mod5140 from "module_5140" /* 5140 */;

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
  return _mod5140.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
}