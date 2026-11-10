// === Module 13288: errorCallback ===

// Module 13288 (errorCallback)
import _mod13289 from "module_13289" /* 13289 */;
import _mod13292 from "module_13292" /* 13292 */;
import _mod13296 from "module_13296" /* 13296 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13297 */;
import _mod13309 from "module_13309" /* 13309 */;
import _mod13320 from "module_13320" /* 13320 */;

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
    if (_mod13320.DEBUG_BUILD) {
      const logger = _mod13292.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13309.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13289.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13296.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}