// _runtime/06697_items.js
import _isNativeReflectConstructDefault from "06682__isNativeReflectConstruct.js";

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = _isNativeReflectConstructDefault({
  name: "NativeViewGestureHandler",
  allowedProps: items1,
  config: {},
});
