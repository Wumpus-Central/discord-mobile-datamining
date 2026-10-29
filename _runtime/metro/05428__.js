// _runtime/metro/05428__.js
import ComposedGestureName from "../05393_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../05402_DEFAULT_PROPS_TRANSFORMER.js";
import _mod5417 from "05417__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useNativeGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod5417.useGesture(ComposedGestureName.SingleGestureName.Native, clonedAndRemappedConfig);
}
