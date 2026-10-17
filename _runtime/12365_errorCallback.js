// === Module 12365: errorCallback ===

// Module 12365 (errorCallback)
import _mod12366 from "module_12366" /* 12366 */;
import _mod12369 from "module_12369" /* 12369 */;
import _mod12373 from "module_12373" /* 12373 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12374 */;
import _mod12386 from "module_12386" /* 12386 */;
import _mod12397 from "module_12397" /* 12397 */;

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
    if (_mod12397.DEBUG_BUILD) {
      const logger = _mod12369.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12386.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12366.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12373.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};