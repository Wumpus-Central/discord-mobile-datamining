// === Module 6737: ? ===

// Module 6737
import ComposedGestureName from "ComposedGestureName" /* 6714 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6723 */;
import _mod6738 from "module_6738" /* 6738 */;

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
  return _mod6738.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};