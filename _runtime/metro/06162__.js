// === Module 6162: ? ===

// Module 6162
import ComposedGestureName from "ComposedGestureName" /* 6127 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 6136 */;
import _mod6151 from "module_6151" /* 6151 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6151.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};