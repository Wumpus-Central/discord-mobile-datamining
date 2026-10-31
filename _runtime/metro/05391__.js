// === Module 5391: ? ===

// Module 5391
import ComposedGestureName from "ComposedGestureName" /* 5362 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 5371 */;
import _mod5386 from "module_5386" /* 5386 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod5386.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}