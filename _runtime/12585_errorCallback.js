// === Module 12585: errorCallback ===

// Module 12585 (errorCallback)
import _mod12586 from "module_12586" /* 12586 */;
import _mod12589 from "module_12589" /* 12589 */;
import _mod12593 from "module_12593" /* 12593 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12594 */;
import _mod12606 from "module_12606" /* 12606 */;
import _mod12617 from "module_12617" /* 12617 */;

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
    if (_mod12617.DEBUG_BUILD) {
      const logger = _mod12589.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12606.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12586.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12593.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};