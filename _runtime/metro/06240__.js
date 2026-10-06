// _runtime/metro/06240__.js
import ComposedGestureName from "../06206_ComposedGestureName.js";
import maybeExtractNativeEvent from "../06215_maybeExtractNativeEvent.js";
import _mod6230 from "06230__.js";

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
