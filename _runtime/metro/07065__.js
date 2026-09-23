// _runtime/metro/07065__.js
import ComposedGestureName from "../07042_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../07051_DEFAULT_PROPS_TRANSFORMER.js";
import _mod7066 from "07066__.js";

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
  return _mod7066.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
