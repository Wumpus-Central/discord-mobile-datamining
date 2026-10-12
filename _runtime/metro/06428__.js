// _runtime/metro/06428__.js
import ComposedGestureName from "../06394_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06403_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6418 from "06418__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod6418.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
