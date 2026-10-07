// _runtime/metro/06229__.js
import ComposedGestureName from "../06206_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06215_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6230 from "06230__.js";

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
  return _mod6230.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
