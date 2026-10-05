// _runtime/metro/06233__.js
import ComposedGestureName from "../06199_ComposedGestureName.js";
import maybeExtractNativeEvent from "../06208_maybeExtractNativeEvent.js";
import _mod6223 from "06223__.js";

let closure_2 = {};

export const useManualGesture = function useManualGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_2;
  }
  const obj = maybeExtractNativeEvent;
  const clonedAndRemappedConfig = obj.useClonedAndRemappedConfig(tmp);
  const obj2 = _mod6223;
  return obj2.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
};
