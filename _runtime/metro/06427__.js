// _runtime/metro/06427__.js
import ComposedGestureName from "../06392_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06401_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6416 from "06416__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6416.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
