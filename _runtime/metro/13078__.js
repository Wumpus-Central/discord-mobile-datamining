// _runtime/metro/13078__.js
import errorCallback from "../13044_errorCallback.js";

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
