// _runtime/07768_addTracingExtensions.js
import errorCallback from "errorCallback" /* 7734 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};