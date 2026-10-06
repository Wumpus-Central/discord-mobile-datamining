// _runtime/metro/06163__.js
import DynamicallyInjectedByGestureHandler from "../00106_DynamicallyInjectedByGestureHandler.js";
import 00065__ from "00065__.js";

let obj2;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNGestureHandlerDetector", directEventTypes: { topGestureHandlerEvent: { registrationName: "onGestureHandlerEvent" }, topGestureHandlerStateChange: { registrationName: "onGestureHandlerStateChange" }, topGestureHandlerTouchEvent: { registrationName: "onGestureHandlerTouchEvent" }, topGestureHandlerReanimatedEvent: { registrationName: "onGestureHandlerReanimatedEvent" }, topGestureHandlerReanimatedStateChange: { registrationName: "onGestureHandlerReanimatedStateChange" }, topGestureHandlerReanimatedTouchEvent: { registrationName: "onGestureHandlerReanimatedTouchEvent" }, topGestureHandlerAnimatedEvent: { registrationName: "onGestureHandlerAnimatedEvent" } }, validAttributes: obj2 };
obj2 = { handlerTags: true, moduleId: true, virtualChildren: true, pointerEvents: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onGestureHandlerEvent: true, onGestureHandlerStateChange: true, onGestureHandlerTouchEvent: true, onGestureHandlerReanimatedEvent: true, onGestureHandlerReanimatedStateChange: true, onGestureHandlerReanimatedTouchEvent: true, onGestureHandlerAnimatedEvent: true }));

export default module_65.get("RNGestureHandlerDetector", () => obj);
export { __INTERNAL_VIEW_CONFIG };