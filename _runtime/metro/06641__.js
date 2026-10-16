// _runtime/metro/06641__.js
import ComposedGestureName from "../06618_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06627_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6642 from "06642__.js";

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
  return _mod6642.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
