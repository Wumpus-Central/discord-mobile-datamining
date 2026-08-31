// _runtime/05622_initialize.js
import onGestureHandlerEvent from "05623_onGestureHandlerEvent.js";

require = arg1;
const dependencyMap = arg6;
arg5.initialize = function initialize() {
  onGestureHandlerEvent.startListening();
};