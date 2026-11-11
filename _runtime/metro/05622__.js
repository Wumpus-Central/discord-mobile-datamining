// _runtime/metro/05622__.js
import ComposedGestureName from "../05597_ComposedGestureName.js";
import resolveInternalConfigProps from "../05606_resolveInternalConfigProps.js";
import _mod5623 from "05623__.js";

require = arg1;
const dependencyMap = arg6;
function transformTapProps(shouldCancelWhenOutside) {
  if (undefined === shouldCancelWhenOutside.shouldCancelWhenOutside) {
    shouldCancelWhenOutside.shouldCancelWhenOutside = true;
  }
  return shouldCancelWhenOutside;
}
const items = [
  ["maxDistance", "maxDist"],
  ["maxDuration", "maxDurationMs"],
  ["maxDelay", "maxDelayMs"],
];
const map = new Map(items);
let closure_4 = {};

export function useTapGesture() {
  let tmp = tmp82Result;
  if (tmp82Result === undefined) {
    tmp = closure_4;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp, map, transformTapProps);
  return _mod5623.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
}
