// === Module 12294: errorCallback ===

// Module 12294 (errorCallback)
import _mod12295 from "module_12295" /* 12295 */;
import _mod12298 from "module_12298" /* 12298 */;
import _mod12302 from "module_12302" /* 12302 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12303 */;
import _mod12315 from "module_12315" /* 12315 */;
import _mod12326 from "module_12326" /* 12326 */;

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
    if (_mod12326.DEBUG_BUILD) {
      const logger = _mod12298.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12315.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12295.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12302.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};