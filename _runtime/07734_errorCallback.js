// === Module 7734: errorCallback ===

// Module 7734 (errorCallback)
import instrumentError from "instrumentError" /* 7735 */;
import consoleSandbox from "consoleSandbox" /* 7738 */;
import instrumentUnhandledRejection from "instrumentUnhandledRejection" /* 7742 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 7743 */;
import getSpanStatusFromHttpCode from "getSpanStatusFromHttpCode" /* 7755 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 7766 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = spanTimeInputToSeconds;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = spanTimeInputToSeconds.getRootSpan(activeSpan);
    const tmpResult = spanTimeInputToSeconds;
  }
  if (rootSpan) {
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const logger = consoleSandbox.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: null, message: "internal_error" };
    obj[0] = getSpanStatusFromHttpCode.SPAN_STATUS_ERROR;
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = instrumentError.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = instrumentUnhandledRejection.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};