// _runtime/metro/12831__.js
import errorCallback from "../12797_errorCallback.js";

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
