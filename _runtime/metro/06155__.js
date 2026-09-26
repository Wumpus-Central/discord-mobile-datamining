// === Module 6155: ? ===

// Module 6155
import ComposedGestureName from "ComposedGestureName" /* 6132 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6141 */;
import _mod6156 from "module_6156" /* 6156 */;

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
  return _mod6156.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};