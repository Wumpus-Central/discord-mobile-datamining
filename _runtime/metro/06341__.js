// === Module 6341: ? ===

// Module 6341
import ComposedGestureName from "ComposedGestureName" /* 6318 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6327 */;
import _mod6342 from "module_6342" /* 6342 */;

require = arg1;
const dependencyMap = arg6;
const items = [["maxDistance", "maxDist"], ["maxDuration", "maxDurationMs"], ["maxDelay", "maxDelayMs"]];
const map = new Map(items);
let closure_3 = {};

export const useTapGesture = function useTapGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_3;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp, map);
  return _mod6342.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};