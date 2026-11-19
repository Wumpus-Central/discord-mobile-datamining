// === Module 5152: ? ===

// Module 5152
import ComposedGestureName from "ComposedGestureName" /* 5114 */;
import resolveInternalConfigProps from "resolveInternalConfigProps" /* 5123 */;
import _mod5140 from "module_5140" /* 5140 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useNativeGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5140.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
}