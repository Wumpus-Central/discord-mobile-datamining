// _runtime/metro/05529__.js
import ComposedGestureName from "../05492_ComposedGestureName.js";
import resolveInternalConfigProps from "../05501_resolveInternalConfigProps.js";
import _mod5518 from "05518__.js";

require = arg1;
const dependencyMap = arg6;
let closure_2 = {};

export function useManualGesture() {
  let tmp = gestureHandlerProps;
  if (gestureHandlerProps === undefined) {
    tmp = closure_2;
  }
  const clonedAndRemappedConfig = resolveInternalConfigProps.useClonedAndRemappedConfig(tmp);
  return _mod5518.useGesture(ComposedGestureName.SingleGestureName.Manual, clonedAndRemappedConfig);
}
