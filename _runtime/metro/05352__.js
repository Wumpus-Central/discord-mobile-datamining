// _runtime/metro/05352__.js
import ComposedGestureName from "../05317_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../05326_DEFAULT_PROPS_TRANSFORMER.js";
import _mod5341 from "05341__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod5341.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
