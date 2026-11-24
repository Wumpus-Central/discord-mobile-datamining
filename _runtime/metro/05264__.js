// === Module 5264: ? ===

// Module 5264
import ComposedGestureName from "ComposedGestureName" /* 5239 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5248 */;
import _mod5265 from "module_5265" /* 5265 */;

require = arg1;
const dependencyMap = arg6;
function transformTapProps(shouldCancelWhenOutside) {
  if (undefined === shouldCancelWhenOutside.shouldCancelWhenOutside) {
    shouldCancelWhenOutside.shouldCancelWhenOutside = true;
  }
  return shouldCancelWhenOutside;
}
const items = [["maxDistance", "maxDist"], ["maxDuration", "maxDurationMs"], ["maxDelay", "maxDelayMs"]];
const map = new Map(items);
let closure_4 = {};

export function useTapGesture() {
  let tmp = tmp82Result;
  if (tmp82Result === undefined) {
    tmp = closure_4;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp, map, transformTapProps);
  return _mod5265.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
}