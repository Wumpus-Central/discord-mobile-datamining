// _runtime/metro/06408__.js
import ComposedGestureName from "../06385_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06394_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6409 from "06409__.js";

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
  return _mod6409.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
