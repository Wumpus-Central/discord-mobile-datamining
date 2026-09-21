// === Module 13046: errorCallback ===

// Module 13046 (errorCallback)
import _mod13047 from "module_13047" /* 13047 */;
import _mod13050 from "module_13050" /* 13050 */;
import _mod13054 from "module_13054" /* 13054 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13055 */;
import _mod13067 from "module_13067" /* 13067 */;
import _mod13078 from "module_13078" /* 13078 */;

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
    if (_mod13078.DEBUG_BUILD) {
      const logger = _mod13050.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13067.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13047.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13054.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};