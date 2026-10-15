// === Module 12271: errorCallback ===

// Module 12271 (errorCallback)
import _mod12272 from "module_12272" /* 12272 */;
import _mod12275 from "module_12275" /* 12275 */;
import _mod12279 from "module_12279" /* 12279 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12280 */;
import _mod12292 from "module_12292" /* 12292 */;
import _mod12303 from "module_12303" /* 12303 */;

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
    if (_mod12303.DEBUG_BUILD) {
      const logger = _mod12275.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12292.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12272.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12279.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};