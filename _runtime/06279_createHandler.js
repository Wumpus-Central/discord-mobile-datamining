// _runtime/06279_createHandler.js
import baseGestureHandlerProps from "06165_baseGestureHandlerProps.js";
import createHandler from "06167_createHandler.js";

const obj = {
  name: "RotationGestureHandler",
  allowedProps: baseGestureHandlerProps.baseGestureHandlerProps,
  config: {},
};

export const rotationHandlerName = "RotationGestureHandler";
export const RotationGestureHandler = createHandler(obj);
