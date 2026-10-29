// _runtime/metro/05416__.js
import ComposedGestureName from "../05393_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../05402_DEFAULT_PROPS_TRANSFORMER.js";
import _mod5417 from "05417__.js";

require = arg1;
const dependencyMap = arg6;
const items = [
  ["maxDistance", "maxDist"],
  ["maxDuration", "maxDurationMs"],
  ["maxDelay", "maxDelayMs"],
];
const map = new Map(items);
let closure_3 = {};

export function useTapGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_3;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp, map);
  return _mod5417.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
}
