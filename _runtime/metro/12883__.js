// _runtime/metro/12883__.js
import errorCallback from "../12849_errorCallback.js";

require = arg1;
const dependencyMap = arg6;

export function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
}
