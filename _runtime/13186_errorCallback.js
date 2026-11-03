// === Module 13186: errorCallback ===

// Module 13186 (errorCallback)
import _mod13187 from "module_13187" /* 13187 */;
import _mod13190 from "module_13190" /* 13190 */;
import _mod13194 from "module_13194" /* 13194 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13195 */;
import _mod13207 from "module_13207" /* 13207 */;
import _mod13218 from "module_13218" /* 13218 */;

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
    if (_mod13218.DEBUG_BUILD) {
      const logger = _mod13190.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13207.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13187.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13194.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}