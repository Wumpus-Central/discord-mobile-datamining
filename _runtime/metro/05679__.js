// === Module 5679: ? ===

// Module 5679
import ComposedGestureName from "ComposedGestureName" /* 5654 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5663 */;
import _mod5680 from "module_5680" /* 5680 */;

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
  return _mod5680.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
}