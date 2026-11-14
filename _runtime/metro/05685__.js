// === Module 5685: ? ===

// Module 5685
import ComposedGestureName from "ComposedGestureName" /* 5660 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5669 */;
import _mod5686 from "module_5686" /* 5686 */;

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
  return _mod5686.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
}