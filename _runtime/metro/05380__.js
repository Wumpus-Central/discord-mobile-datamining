// === Module 5380: ? ===

// Module 5380
import ComposedGestureName from "ComposedGestureName" /* 5357 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 5366 */;
import _mod5381 from "module_5381" /* 5381 */;

require = arg1;
const dependencyMap = arg6;
const items = [["maxDistance", "maxDist"], ["maxDuration", "maxDurationMs"], ["maxDelay", "maxDelayMs"]];
const map = new Map(items);
let closure_3 = {};

export function useTapGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_3;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp, map);
  return _mod5381.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
}