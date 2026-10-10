// _runtime/metro/06427__.js
import ComposedGestureName from "../06393_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06402_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6417 from "06417__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6417.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
