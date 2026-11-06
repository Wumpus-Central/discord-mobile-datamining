// === Module 5537: ? ===

// Module 5537
import ComposedGestureName from "ComposedGestureName" /* 5512 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5521 */;
import _mod5538 from "module_5538" /* 5538 */;

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
  return _mod5538.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
}