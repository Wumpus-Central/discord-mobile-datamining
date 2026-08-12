// _runtime/05468_initialize.js
import { onGestureHandlerEvent } from "05469_onGestureHandlerEvent.js";
const require = arg1;
const dependencyMap = arg6;
arg5.initialize = function initialize() {
  onGestureHandlerEvent.startListening();
};