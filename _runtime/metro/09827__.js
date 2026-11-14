// _runtime/metro/09827__.js
import errorCallback from "../09793_errorCallback.js";

require = arg1;
const dependencyMap = arg6;

export function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
}
