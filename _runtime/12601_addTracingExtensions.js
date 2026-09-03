// _runtime/12601_addTracingExtensions.js
import errorCallback from "12567_errorCallback.js";

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
