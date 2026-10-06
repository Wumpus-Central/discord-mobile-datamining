// === Module 6285: createHandler ===

// Module 6285 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6172 */;
import createHandler from "createHandler" /* 6174 */;

const obj = { name: "PinchGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = createHandler(obj);