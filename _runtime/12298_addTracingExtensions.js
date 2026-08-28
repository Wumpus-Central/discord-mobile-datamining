// === Module 12298: addTracingExtensions ===

// Module 12298 (addTracingExtensions)
import errorCallback from "errorCallback" /* 12264 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};