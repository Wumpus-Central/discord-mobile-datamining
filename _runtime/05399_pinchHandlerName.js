// _runtime/05399_pinchHandlerName.js
const obj = { name: "PinchGestureHandler", allowedProps: null, config: null };
obj[1] = require("items1").baseGestureHandlerProps;
obj[2] = {};

export const pinchHandlerName = "PinchGestureHandler";
export const PinchGestureHandler = require("_isNativeReflectConstruct")(obj);