// _runtime/05490_initialize.js
import { onGestureHandlerEvent } from "05491_onGestureHandlerEvent.js";
const require = arg1;
const dependencyMap = arg6;
arg5.initialize = function initialize() {
  onGestureHandlerEvent.startListening();
};