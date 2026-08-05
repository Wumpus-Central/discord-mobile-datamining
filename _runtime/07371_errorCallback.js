// _runtime/07371_errorCallback.js
const require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = require(7380) /* spanTimeInputToSeconds */;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(7380).getRootSpan(activeSpan);
    const tmpResult = tmp(7380);
  }
  if (rootSpan) {
    if (tmp(7403).DEBUG_BUILD) {
      const logger = tmp(7375).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(7392).SPAN_STATUS_ERROR;
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = require(7372) /* instrumentError */.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = require(7372) /* instrumentError */;
    const result1 = require(7379) /* instrumentUnhandledRejection */.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = require(7379) /* instrumentUnhandledRejection */;
  }
};