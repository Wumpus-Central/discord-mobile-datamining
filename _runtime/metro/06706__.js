// _runtime/metro/06706__.js
import ComposedGestureName from "../06671_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06680_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6695 from "06695__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useNativeGesture = function useNativeGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6695.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
};
