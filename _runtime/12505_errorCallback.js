// === Module 12505: errorCallback ===

// Module 12505 (errorCallback)
import _mod12506 from "module_12506" /* 12506 */;
import _mod12509 from "module_12509" /* 12509 */;
import _mod12513 from "module_12513" /* 12513 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12514 */;
import _mod12526 from "module_12526" /* 12526 */;
import _mod12537 from "module_12537" /* 12537 */;

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
    if (_mod12537.DEBUG_BUILD) {
      const logger = _mod12509.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12526.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12506.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12513.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};