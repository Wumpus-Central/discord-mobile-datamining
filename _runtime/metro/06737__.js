// _runtime/metro/06737__.js
import ComposedGestureName from "../06714_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06723_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6738 from "06738__.js";

require = arg1;
const dependencyMap = arg6;
const items = [
  ["maxDistance", "maxDist"],
  ["maxDuration", "maxDurationMs"],
  ["maxDelay", "maxDelayMs"],
];
const map = new Map(items);
let closure_3 = {};

export const useTapGesture = function useTapGesture(gestureHandlerProps) {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_3;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp, map);
  return _mod6738.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
