// _runtime/12827_addTracingExtensions.js
import errorCallback from "12793_errorCallback.js";

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
