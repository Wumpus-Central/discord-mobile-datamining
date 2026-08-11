// _runtime/07486_addTracingExtensions.js
import { errorCallback } from "07452_errorCallback.js";
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};