// _runtime/metro/06341__.js
import ComposedGestureName from "../06318_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06327_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6342 from "06342__.js";

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
  return _mod6342.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
};
