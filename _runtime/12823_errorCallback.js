// === Module 12823: errorCallback ===

// Module 12823 (errorCallback)
import _mod12824 from "module_12824" /* 12824 */;
import _mod12827 from "module_12827" /* 12827 */;
import _mod12831 from "module_12831" /* 12831 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12832 */;
import _mod12844 from "module_12844" /* 12844 */;
import _mod12855 from "module_12855" /* 12855 */;

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
    if (_mod12855.DEBUG_BUILD) {
      const logger = _mod12827.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: _mod12844.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12824.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12831.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};