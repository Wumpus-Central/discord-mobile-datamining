const require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = require(6376) /* spanTimeInputToSeconds */;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(6376).getRootSpan(activeSpan);
    const tmpResult = tmp(6376);
  }
  if (rootSpan) {
    if (tmp(6399).DEBUG_BUILD) {
      const logger = tmp(6371).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(6388).SPAN_STATUS_ERROR;
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = require(6368) /* instrumentError */.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = require(6368) /* instrumentError */;
    const result1 = require(6375) /* instrumentUnhandledRejection */.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = require(6375) /* instrumentUnhandledRejection */;
  }
};