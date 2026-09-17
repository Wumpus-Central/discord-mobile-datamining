// === Module 12944: errorCallback ===

// Module 12944 (errorCallback)
import _mod12945 from "module_12945" /* 12945 */;
import _mod12948 from "module_12948" /* 12948 */;
import _mod12952 from "module_12952" /* 12952 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12953 */;
import _mod12965 from "module_12965" /* 12965 */;
import _mod12976 from "module_12976" /* 12976 */;

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
    if (_mod12976.DEBUG_BUILD) {
      const logger = _mod12948.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12965.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12945.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12952.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};