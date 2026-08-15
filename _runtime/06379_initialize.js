// _runtime/06379_initialize.js
import { onGestureHandlerEvent } from "06380_onGestureHandlerEvent.js";
const require = arg1;
const dependencyMap = arg6;
arg5.initialize = function initialize() {
  onGestureHandlerEvent.startListening();
};