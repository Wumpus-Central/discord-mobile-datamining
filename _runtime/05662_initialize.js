// _runtime/05662_initialize.js
import onGestureHandlerEvent from "05663_onGestureHandlerEvent.js";

require = arg1;
const dependencyMap = arg6;
arg5.initialize = function initialize() {
  onGestureHandlerEvent.startListening();
};
