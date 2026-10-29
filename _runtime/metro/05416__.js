// === Module 5416: ? ===

// Module 5416
import ComposedGestureName from "ComposedGestureName" /* 5393 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 5402 */;
import _mod5417 from "module_5417" /* 5417 */;

require = arg1;
const dependencyMap = arg6;
const items = [["maxDistance", "maxDist"], ["maxDuration", "maxDurationMs"], ["maxDelay", "maxDelayMs"]];
const map = new Map(items);
let closure_3 = {};

export function useTapGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_3;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp, map);
  return _mod5417.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
}