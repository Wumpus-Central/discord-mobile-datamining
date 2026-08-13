// _runtime/05469_initialize.js
import { onGestureHandlerEvent } from "05470_onGestureHandlerEvent.js";
const require = arg1;
const dependencyMap = arg6;
arg5.initialize = function initialize() {
  onGestureHandlerEvent.startListening();
};