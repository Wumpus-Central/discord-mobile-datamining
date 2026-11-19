// === Module 5139: ? ===

// Module 5139
import ComposedGestureName from "ComposedGestureName" /* 5114 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5123 */;
import _mod5140 from "module_5140" /* 5140 */;

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
  return _mod5140.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
}