// === Module 5427: ? ===

// Module 5427
import ComposedGestureName from "ComposedGestureName" /* 5393 */;
import DEFAULT_PROPS_TRANSFORMER from "DEFAULT_PROPS_TRANSFORMER" /* 5402 */;
import _mod5417 from "module_5417" /* 5417 */;

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useManualGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp);
  return _mod5417.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}