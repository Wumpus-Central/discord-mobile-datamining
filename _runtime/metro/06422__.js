// _runtime/metro/06422__.js
import ComposedGestureName from "../06392_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06401_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6416 from "06416__.js";

require = arg1;
const dependencyMap = arg6;
function transformLongPressProps(shouldCancelWhenOutside) {
  if (undefined === shouldCancelWhenOutside.shouldCancelWhenOutside) {
    shouldCancelWhenOutside.shouldCancelWhenOutside = true;
  }
  return shouldCancelWhenOutside;
}
const items = [
  ["minDuration", "minDurationMs"],
  ["maxDistance", "maxDist"],
];
const map = new Map(items);
let closure_4 = {};

export const useLongPressGesture = function useLongPressGesture() {
  let tmp = cResult;
  if (cResult === undefined) {
    tmp = closure_4;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(
    tmp,
    map,
    transformLongPressProps,
  );
  return _mod6416.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
};
