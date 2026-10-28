// _runtime/metro/05426__.js
import ComposedGestureName from "../05392_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../05401_DEFAULT_PROPS_TRANSFORMER.js";
import _mod5416 from "05416__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod5416.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
