// _runtime/05654_initialize.js
import onGestureHandlerEvent from "05655_onGestureHandlerEvent.js";

require = arg1;
const dependencyMap = arg6;
arg5.initialize = function initialize() {
  onGestureHandlerEvent.startListening();
};
