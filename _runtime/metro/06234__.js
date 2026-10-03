// _runtime/metro/06234__.js
import ComposedGestureName from "../06199_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06208_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6223 from "06223__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6223.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
