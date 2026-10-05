// === Module 6279: createHandler ===

// Module 6279 (createHandler)
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6165 */;
import createHandler from "createHandler" /* 6167 */;

const obj = { name: "RotationGestureHandler", allowedProps: baseGestureHandlerProps.baseGestureHandlerProps, config: {} };

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);