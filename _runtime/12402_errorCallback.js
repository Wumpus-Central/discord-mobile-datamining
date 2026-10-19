// === Module 12402: errorCallback ===

// Module 12402 (errorCallback)
import _mod12403 from "module_12403" /* 12403 */;
import _mod12406 from "module_12406" /* 12406 */;
import _mod12410 from "module_12410" /* 12410 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12411 */;
import _mod12423 from "module_12423" /* 12423 */;
import _mod12434 from "module_12434" /* 12434 */;

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
    if (_mod12434.DEBUG_BUILD) {
      const logger = _mod12406.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12423.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12403.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12410.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};