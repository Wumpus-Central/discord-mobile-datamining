// === Module 12521: errorCallback ===

// Module 12521 (errorCallback)
import _mod12522 from "module_12522" /* 12522 */;
import _mod12525 from "module_12525" /* 12525 */;
import _mod12529 from "module_12529" /* 12529 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12530 */;
import _mod12542 from "module_12542" /* 12542 */;
import _mod12553 from "module_12553" /* 12553 */;

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
    if (_mod12553.DEBUG_BUILD) {
      const logger = _mod12525.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12542.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12522.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12529.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};