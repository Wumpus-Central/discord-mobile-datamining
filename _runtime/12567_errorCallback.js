// === Module 12567: errorCallback ===

// Module 12567 (errorCallback)
import instrumentError from "instrumentError" /* 12568 */;
import instrumentUnhandledRejection from "instrumentUnhandledRejection" /* 12575 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12576 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = spanTimeInputToSeconds;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(12576).getRootSpan(activeSpan);
    const tmpResult = tmp(12576);
  }
  if (rootSpan) {
    if (tmp(12599).DEBUG_BUILD) {
      const logger = tmp(12571).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = tmp(12588).SPAN_STATUS_ERROR;
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