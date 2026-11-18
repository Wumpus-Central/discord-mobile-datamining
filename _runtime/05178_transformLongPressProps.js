// === Module 5178: transformLongPressProps ===

// Module 5178 (transformLongPressProps)
import ComposedGestureName from "ComposedGestureName" /* 5145 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5154 */;
import _mod5171 from "module_5171" /* 5171 */;

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
  return _mod5171.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
}