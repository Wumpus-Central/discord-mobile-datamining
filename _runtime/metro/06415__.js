// _runtime/metro/06415__.js
import ComposedGestureName from "../06392_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06401_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6416 from "06416__.js";

require = arg1;
const dependencyMap = arg6;
const items = [
  ["maxDistance", "maxDist"],
  ["maxDuration", "maxDurationMs"],
  ["maxDelay", "maxDelayMs"],
];
const map = new Map(items);
let closure_3 = {};

export const useTapGesture = function useTapGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_3;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp, map);
  return _mod6416.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
