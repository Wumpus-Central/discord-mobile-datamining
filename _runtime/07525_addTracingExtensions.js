// _runtime/07525_addTracingExtensions.js
import { errorCallback } from "07491_errorCallback.js";
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};