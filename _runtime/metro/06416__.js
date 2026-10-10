// _runtime/metro/06416__.js
import ComposedGestureName from "../06393_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06402_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6417 from "06417__.js";

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
  return _mod6417.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
