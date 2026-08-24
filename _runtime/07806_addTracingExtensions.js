// === Module 7806: addTracingExtensions ===

// Module 7806 (addTracingExtensions)
import errorCallback from "errorCallback" /* 7772 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};