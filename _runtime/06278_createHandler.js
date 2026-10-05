// _runtime/06278_createHandler.js
import baseGestureHandlerProps from "06165_baseGestureHandlerProps.js";
import createHandler from "06167_createHandler.js";

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
