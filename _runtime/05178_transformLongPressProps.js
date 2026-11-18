// _runtime/05178_transformLongPressProps.js
import ComposedGestureName from "05145_ComposedGestureName.js";
import resolveInternalConfigProps from "05154_resolveInternalConfigProps.js";
import _mod5171 from "metro/05171__.js";

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

export function useLongPressGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_4;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(
    tmp,
    map,
    transformLongPressProps,
  );
  return _mod5171.useGesture(ComposedGestureName.SingleGestureName.LongPress, clonedAndRemappedConfig);
}
