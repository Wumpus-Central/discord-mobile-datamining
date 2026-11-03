// _runtime/metro/13220__.js
import errorCallback from "../13186_errorCallback.js";

require = arg1;
const dependencyMap = arg6;

export function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
}
