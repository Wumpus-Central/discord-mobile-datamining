// _runtime/metro/12978__.js
import errorCallback from "../12944_errorCallback.js";

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
