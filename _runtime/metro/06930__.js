// _runtime/metro/06930__.js
import ComposedGestureName from "../06907_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06916_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6931 from "06931__.js";

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
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_3;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp, map);
  return _mod6931.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
