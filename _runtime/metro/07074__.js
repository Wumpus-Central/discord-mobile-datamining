// _runtime/metro/07074__.js
import ComposedGestureName from "../07044_ComposedGestureName.js";
import DEFAULT_PROPS_TRANSFORMER from "../07053_DEFAULT_PROPS_TRANSFORMER.js";
import _mod7068 from "07068__.js";

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
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_4;
  }
  const clonedAndRemappedConfig = DEFAULT_PROPS_TRANSFORMER.useClonedAndRemappedConfig(
    tmp,
    map,
    transformLongPressProps,
  );
  return _mod7068.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
};
