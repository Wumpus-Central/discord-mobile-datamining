// === Module 5692: ? ===

// Module 5692
import ComposedGestureName from "ComposedGestureName" /* 5654 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5663 */;
import _mod5680 from "module_5680" /* 5680 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useNativeGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5680.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
}