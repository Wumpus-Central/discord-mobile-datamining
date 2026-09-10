// === Module 12863: errorCallback ===

// Module 12863 (errorCallback)
import _mod12864 from "module_12864" /* 12864 */;
import _mod12867 from "module_12867" /* 12867 */;
import _mod12871 from "module_12871" /* 12871 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12872 */;
import _mod12884 from "module_12884" /* 12884 */;
import _mod12895 from "module_12895" /* 12895 */;

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
    if (_mod12895.DEBUG_BUILD) {
      const logger = _mod12867.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: _mod12884.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12864.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12871.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};