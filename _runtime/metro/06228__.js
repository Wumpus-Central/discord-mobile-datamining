// === Module 6228: ? ===

// Module 6228
import ComposedGestureName from "ComposedGestureName" /* 6199 */;
import maybeExtractNativeEvent from "maybeExtractNativeEvent" /* 6208 */;
import _mod6223 from "module_6223" /* 6223 */;

let closure_2 = {};

export const useFlingGesture = function useFlingGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6223;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Fling, clonedAndRemappedConfig);
};