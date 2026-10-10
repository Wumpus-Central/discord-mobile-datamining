// === Module 6423: ? ===

// Module 6423
import ComposedGestureName from "ComposedGestureName" /* 6393 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6402 */;
import _mod6417 from "module_6417" /* 6417 */;

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
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_4;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp, map, transformLongPressProps);
  return _mod6417.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
};