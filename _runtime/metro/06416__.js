// === Module 6416: ? ===

// Module 6416
import ComposedGestureName from "ComposedGestureName" /* 6393 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6402 */;
import _mod6417 from "module_6417" /* 6417 */;

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
  return _mod6417.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};