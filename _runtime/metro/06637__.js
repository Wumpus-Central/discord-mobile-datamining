// _runtime/metro/06637__.js
import ComposedGestureName from "../06614_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06623_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6638 from "06638__.js";

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
  return _mod6638.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
