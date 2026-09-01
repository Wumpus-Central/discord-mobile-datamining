// === Module 12331: errorCallback ===

// Module 12331 (errorCallback)
import instrumentError from "instrumentError" /* 12332 */;
import instrumentUnhandledRejection from "instrumentUnhandledRejection" /* 12339 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12340 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = spanTimeInputToSeconds;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(12340).getRootSpan(activeSpan);
    const tmpResult = tmp(12340);
  }
  if (rootSpan) {
    if (tmp(12363).DEBUG_BUILD) {
      const logger = tmp(12335).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(12352).SPAN_STATUS_ERROR;
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = instrumentError.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj = instrumentError;
    const result1 = instrumentUnhandledRejection.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
    const obj2 = instrumentUnhandledRejection;
  }
};