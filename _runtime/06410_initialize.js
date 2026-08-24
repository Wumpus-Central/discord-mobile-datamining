// _runtime/06410_initialize.js
import onGestureHandlerEvent from "06411_onGestureHandlerEvent.js";

require = arg1;
const dependencyMap = arg6;
arg5.initialize = function initialize() {
  onGestureHandlerEvent.startListening();
};