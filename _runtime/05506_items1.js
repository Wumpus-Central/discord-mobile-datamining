// _runtime/05506_items1.js
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: null, config: null };
const items1 = [...items];
obj[1] = items1;
obj[2] = {};

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = require("_isNativeReflectConstruct")(obj);