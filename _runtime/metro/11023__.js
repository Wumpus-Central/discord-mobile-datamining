// _runtime/metro/11023__.js
import errorCallback from "../10989_errorCallback.js";

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
