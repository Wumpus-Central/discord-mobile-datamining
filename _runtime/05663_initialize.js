// _runtime/05663_initialize.js
import onGestureHandlerEvent from "05664_onGestureHandlerEvent.js";

require = arg1;
const dependencyMap = arg6;
arg5.initialize = function initialize() {
  onGestureHandlerEvent.startListening();
};
