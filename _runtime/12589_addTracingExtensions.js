// === Module 12589: addTracingExtensions ===

// Module 12589 (addTracingExtensions)
import errorCallback from "errorCallback" /* 12555 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};