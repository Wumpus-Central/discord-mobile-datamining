// === Module 5522: ? ===

// Module 5522
import ComposedGestureName from "ComposedGestureName" /* 5490 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5499 */;
import _mod5516 from "module_5516" /* 5516 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5516.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}