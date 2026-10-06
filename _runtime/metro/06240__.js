// === Module 6240: ? ===

// Module 6240
import ComposedGestureName from "ComposedGestureName" /* 6206 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6215 */;
import _mod6230 from "module_6230" /* 6230 */;

let closure_2 = {};

export const useManualGesture = function useManualGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6230;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};