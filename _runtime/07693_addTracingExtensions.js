// === Module 7693: addTracingExtensions ===

// Module 7693 (addTracingExtensions)
import errorCallback from "errorCallback" /* 7659 */;

require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};