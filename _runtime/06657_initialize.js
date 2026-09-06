// _runtime/06657_initialize.js
import onGestureHandlerEvent from "06658_onGestureHandlerEvent.js";

require = arg1;
const dependencyMap = arg6;
arg5.initialize = function initialize() {
  onGestureHandlerEvent.startListening();
};
