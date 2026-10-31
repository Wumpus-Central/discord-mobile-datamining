// _runtime/metro/05385__.js
import ComposedGestureName from "../05362_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../05371_DEFAULT_PROPS_TRANSFORMER.js";
import _mod5386 from "05386__.js";

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
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_3;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(tmp, map);
  return _mod5386.useGesture(ComposedGestureName.SingleGestureName.Tap, clonedAndRemappedConfig);
}
