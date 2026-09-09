// _runtime/metro/06751__.js
import ComposedGestureName from "../06728_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06737_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6752 from "06752__.js";

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
  return _mod6752.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
