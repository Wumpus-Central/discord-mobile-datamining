// === Module 6222: ? ===

// Module 6222
import ComposedGestureName from "ComposedGestureName" /* 6199 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6208 */;
import _mod6223 from "module_6223" /* 6223 */;

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
  return _mod6223.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};