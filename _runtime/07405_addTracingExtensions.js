// _runtime/07405_addTracingExtensions.js
import { errorCallback } from "07371_errorCallback.js";
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};