// _runtime/07405_addTracingExtensions.js
const require = arg1;
const dependencyMap = arg6;
arg5.addTracingExtensions = function addTracingExtensions() {
  const result = require(7371) /* errorCallback */.registerSpanErrorInstrumentation();
};