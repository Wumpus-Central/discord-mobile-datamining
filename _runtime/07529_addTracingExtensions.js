// _runtime/07529_addTracingExtensions.js
import { errorCallback } from "07495_errorCallback.js";
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};