// _runtime/06182_nativeViewGestureHandlerProps.js
import createHandlerDefault from "06167_createHandler.js";

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
