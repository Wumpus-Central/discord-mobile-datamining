// _runtime/metro/05389__.js
import ComposedGestureName from "../05354_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../05363_DEFAULT_PROPS_TRANSFORMER.js";
import _mod5378 from "05378__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod5378.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
