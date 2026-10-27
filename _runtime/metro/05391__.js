// _runtime/metro/05391__.js
import ComposedGestureName from "../05357_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../05366_DEFAULT_PROPS_TRANSFORMER.js";
import _mod5381 from "05381__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export const useManualGesture = function useManualGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod5381.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
