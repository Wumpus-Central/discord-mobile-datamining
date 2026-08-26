// _runtime/05601_initialize.js
import onGestureHandlerEvent from "05602_onGestureHandlerEvent.js";

require = arg1;
const dependencyMap = arg6;
arg5.initialize = function initialize() {
  onGestureHandlerEvent.startListening();
};