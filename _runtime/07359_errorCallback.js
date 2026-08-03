// === Module 7359: errorCallback ===

// Module 7359 (errorCallback)
const require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = require(7368) /* spanTimeInputToSeconds */;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(7368).getRootSpan(activeSpan);
    const tmpResult = tmp(7368);
  }
  if (rootSpan) {
    if (tmp(7391).DEBUG_BUILD) {
      const logger = tmp(7363).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(7380).SPAN_STATUS_ERROR;
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = require(7360) /* instrumentError */.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = require(7360) /* instrumentError */;
    const result1 = require(7367) /* instrumentUnhandledRejection */.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = require(7367) /* instrumentUnhandledRejection */;
  }
};