// _runtime/12332_addTracingExtensions.js
import errorCallback from "12298_errorCallback.js";

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};