// === Module 12332: addTracingExtensions ===

// Module 12332 (addTracingExtensions)
import errorCallback from "errorCallback" /* 12298 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};