// === Module 5141: ? ===

// Module 5141
import ComposedGestureName from "ComposedGestureName" /* 5116 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5125 */;
import _mod5142 from "module_5142" /* 5142 */;

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
  return _mod5142.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
}