// === Module 5340: ? ===

// Module 5340
import ComposedGestureName from "ComposedGestureName" /* 5317 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 5326 */;
import _mod5341 from "module_5341" /* 5341 */;

require = arg1;
const dependencyMap = arg6;
const items = [["maxDistance", "maxDist"], ["maxDuration", "maxDurationMs"], ["maxDelay", "maxDelayMs"]];
const map = new Map(items);
let closure_3 = {};

export const useTapGesture = function useTapGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_3;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp, map);
  return _mod5341.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};