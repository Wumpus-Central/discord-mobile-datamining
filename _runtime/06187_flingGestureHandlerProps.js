// === Module 6187: flingGestureHandlerProps ===

// Module 6187 (flingGestureHandlerProps)
import createHandler from "createHandler" /* 6174 */;

let items1;
const items = ["numberOfPointers", "direction"];
const obj = { name: "FlingGestureHandler", allowedProps: items1, config: {} };
items1 = [...items];

export const flingGestureHandlerProps = items;
export const flingHandlerName = "FlingGestureHandler";
export const FlingGestureHandler = createHandler(obj);