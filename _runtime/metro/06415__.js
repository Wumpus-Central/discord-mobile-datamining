// _runtime/metro/06415__.js
import ComposedGestureName from "../06385_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../06394_DEFAULT_PROPS_TRANSFORMER.js";
import _mod6409 from "06409__.js";

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
  return _mod6409.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
};
