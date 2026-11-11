// === Module 5622: ? ===

// Module 5622
import ComposedGestureName from "ComposedGestureName" /* 5597 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5606 */;
import _mod5623 from "module_5623" /* 5623 */;

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
  return _mod5623.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
}