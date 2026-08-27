// _runtime/05606_initialize.js
import onGestureHandlerEvent from "05607_onGestureHandlerEvent.js";

require = arg1;
const dependencyMap = arg6;
arg5.initialize = function initialize() {
  onGestureHandlerEvent.startListening();
};