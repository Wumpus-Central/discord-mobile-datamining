// === Module 5544: ? ===

// Module 5544
import ComposedGestureName from "ComposedGestureName" /* 5512 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5521 */;
import _mod5538 from "module_5538" /* 5538 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5538.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}