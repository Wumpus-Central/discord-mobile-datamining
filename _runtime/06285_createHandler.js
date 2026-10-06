// _runtime/06285_createHandler.js
import baseGestureHandlerProps from "06172_baseGestureHandlerProps.js";
import createHandler from "06174_createHandler.js";

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);
