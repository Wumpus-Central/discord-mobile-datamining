// _runtime/05619_initialize.js
import onGestureHandlerEvent from "05620_onGestureHandlerEvent.js";

require = arg1;
const dependencyMap = arg6;
arg5.initialize = function initialize() {
  onGestureHandlerEvent.startListening();
};