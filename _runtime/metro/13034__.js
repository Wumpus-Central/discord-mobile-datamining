// _runtime/metro/13034__.js
import errorCallback from "../13000_errorCallback.js";

require = arg1;
const dependencyMap = arg6;

export function addTracingExtensions() {
  const result = errorCallback.registerSpanErrorInstrumentation();
}
