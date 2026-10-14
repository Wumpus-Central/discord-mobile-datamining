// _runtime/metro/06433__.js
import ComposedGestureName from "../06398_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06407_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6422 from "06422__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6422.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
