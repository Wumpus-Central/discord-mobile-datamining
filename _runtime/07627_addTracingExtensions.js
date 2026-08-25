// === Module 7627: addTracingExtensions ===

// Module 7627 (addTracingExtensions)
import errorCallback from "errorCallback" /* 7593 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};