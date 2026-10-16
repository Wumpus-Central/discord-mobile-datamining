// === Module 12300: errorCallback ===

// Module 12300 (errorCallback)
import _mod12301 from "module_12301" /* 12301 */;
import _mod12304 from "module_12304" /* 12304 */;
import _mod12308 from "module_12308" /* 12308 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12309 */;
import _mod12321 from "module_12321" /* 12321 */;
import _mod12332 from "module_12332" /* 12332 */;

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
    if (_mod12332.DEBUG_BUILD) {
      const logger = _mod12304.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12321.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12301.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12308.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};