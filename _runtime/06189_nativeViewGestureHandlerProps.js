// _runtime/06189_nativeViewGestureHandlerProps.js
import createHandlerDefault from "06174_createHandler.js";

const items = ["shouldActivateOnStart", "disallowInterruption"];
const items1 = [...items];

export const nativeViewGestureHandlerProps = items;
export const nativeViewProps = items1;
export const nativeViewHandlerName = "NativeViewGestureHandler";
export const NativeViewGestureHandler = createHandlerDefault({
  name: "NativeViewGestureHandler",
  allowedProps: items1,
  config: {},
});
