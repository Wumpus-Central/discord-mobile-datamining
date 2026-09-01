// === Module 12365: addTracingExtensions ===

// Module 12365 (addTracingExtensions)
import errorCallback from "errorCallback" /* 12331 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};