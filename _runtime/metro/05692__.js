// === Module 5692: ? ===

// Module 5692
import ComposedGestureName from "ComposedGestureName" /* 5660 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5669 */;
import _mod5686 from "module_5686" /* 5686 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useFlingGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5686.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
}