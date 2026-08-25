// _runtime/05535_initialize.js
import onGestureHandlerEvent from "05536_onGestureHandlerEvent.js";

require = arg1;
const dependencyMap = arg6;
arg5.initialize = function initialize() {
  onGestureHandlerEvent.startListening();
};