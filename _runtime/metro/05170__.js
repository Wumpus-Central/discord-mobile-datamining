// === Module 5170: ? ===

// Module 5170
import ComposedGestureName from "ComposedGestureName" /* 5145 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5154 */;
import _mod5171 from "module_5171" /* 5171 */;

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
  return _mod5171.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
}