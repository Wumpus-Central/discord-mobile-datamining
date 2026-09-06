// === Module 12827: addTracingExtensions ===

// Module 12827 (addTracingExtensions)
import errorCallback from "errorCallback" /* 12793 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};