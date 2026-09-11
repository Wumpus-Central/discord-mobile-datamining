// === Module 12886: errorCallback ===

// Module 12886 (errorCallback)
import _mod12887 from "module_12887" /* 12887 */;
import _mod12890 from "module_12890" /* 12890 */;
import _mod12894 from "module_12894" /* 12894 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12895 */;
import _mod12907 from "module_12907" /* 12907 */;
import _mod12918 from "module_12918" /* 12918 */;

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
    if (_mod12918.DEBUG_BUILD) {
      const logger = _mod12890.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: _mod12907.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12887.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12894.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};