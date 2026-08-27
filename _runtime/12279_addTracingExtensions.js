// === Module 12279: addTracingExtensions ===

// Module 12279 (addTracingExtensions)
import errorCallback from "errorCallback" /* 12245 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};