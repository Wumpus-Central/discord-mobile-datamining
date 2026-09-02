// _runtime/12589_addTracingExtensions.js
import errorCallback from "12555_errorCallback.js";

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
