// === Module 6278: createHandler ===

// Module 6278 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6165 */;
import createHandler from "createHandler" /* 6167 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);