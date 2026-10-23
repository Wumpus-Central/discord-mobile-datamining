// _runtime/metro/05377__.js
import ComposedGestureName from "../05354_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../05363_DEFAULT_PROPS_TRANSFORMER.js";
import _mod5378 from "05378__.js";

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
  return _mod5378.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
