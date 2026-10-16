// _runtime/metro/06651__.js
import ComposedGestureName from "../06616_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06625_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6640 from "06640__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6640.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
