// _runtime/06286_createHandler.js
import baseGestureHandlerProps from "06172_baseGestureHandlerProps.js";
import createHandler from "06174_createHandler.js";

const obj = {
  name: "RotationGestureHandler",
  allowedProps: baseGestureHandlerProps.baseGestureHandlerProps,
  config: {},
};

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
