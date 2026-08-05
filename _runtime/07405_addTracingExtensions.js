import { errorCallback } from "07371_errorCallback.js";
// _runtime/07405_addTracingExtensions.js
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback /* errorCallback */.registerSpanErrorInstrumentation();
};