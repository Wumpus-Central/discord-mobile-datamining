// === Module 11204: errorCallback ===

// Module 11204 (errorCallback)
import _mod11205 from "module_11205" /* 11205 */;
import _mod11208 from "module_11208" /* 11208 */;
import _mod11212 from "module_11212" /* 11212 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 11213 */;
import _mod11225 from "module_11225" /* 11225 */;
import _mod11236 from "module_11236" /* 11236 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  const activeSpan = spanTimeInputToSeconds.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = spanTimeInputToSeconds.getRootSpan(activeSpan);
    const tmpResult = spanTimeInputToSeconds;
  }
  if (rootSpan) {
    if (_mod11236.DEBUG_BUILD) {
      const logger = _mod11208.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod11225.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod11205.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod11212.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};