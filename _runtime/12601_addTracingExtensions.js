// === Module 12601: addTracingExtensions ===

// Module 12601 (addTracingExtensions)
import errorCallback from "errorCallback" /* 12567 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};