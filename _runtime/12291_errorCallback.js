// === Module 12291: errorCallback ===

// Module 12291 (errorCallback)
import _mod12292 from "module_12292" /* 12292 */;
import _mod12295 from "module_12295" /* 12295 */;
import _mod12299 from "module_12299" /* 12299 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12300 */;
import _mod12312 from "module_12312" /* 12312 */;
import _mod12323 from "module_12323" /* 12323 */;

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
    if (_mod12323.DEBUG_BUILD) {
      const logger = _mod12295.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12312.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12292.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12299.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};