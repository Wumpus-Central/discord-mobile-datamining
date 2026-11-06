// _runtime/metro/13285__.js
import errorCallback from "../13251_errorCallback.js";

require = arg1;
const dependencyMap = arg6;

export function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
}
