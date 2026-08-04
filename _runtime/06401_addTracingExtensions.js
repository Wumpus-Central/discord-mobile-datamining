// _runtime/06401_addTracingExtensions.js
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = require(6367) /* errorCallback */.registerSpanErrorInstrumentation();
};