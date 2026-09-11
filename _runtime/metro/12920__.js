// _runtime/metro/12920__.js
import errorCallback from "../12886_errorCallback.js";

require = arg1;
const dependencyMap = arg6;

export const addTracingExtensions = function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
};
