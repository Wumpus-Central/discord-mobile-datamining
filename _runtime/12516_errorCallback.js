// === Module 12516: errorCallback ===

// Module 12516 (errorCallback)
import _mod12517 from "module_12517" /* 12517 */;
import _mod12520 from "module_12520" /* 12520 */;
import _mod12524 from "module_12524" /* 12524 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12525 */;
import _mod12537 from "module_12537" /* 12537 */;
import _mod12548 from "module_12548" /* 12548 */;

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
    if (_mod12548.DEBUG_BUILD) {
      const logger = _mod12520.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12537.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12517.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12524.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};