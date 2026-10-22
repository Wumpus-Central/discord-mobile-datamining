// _runtime/metro/05377__.js
import ComposedGestureName from "../05342_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../05351_DEFAULT_PROPS_TRANSFORMER.js";
import _mod5366 from "05366__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod5366.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
