// === Module 12475: errorCallback ===

// Module 12475 (errorCallback)
import _mod12476 from "module_12476" /* 12476 */;
import _mod12479 from "module_12479" /* 12479 */;
import _mod12483 from "module_12483" /* 12483 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12484 */;
import _mod12496 from "module_12496" /* 12496 */;
import _mod12507 from "module_12507" /* 12507 */;

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
    if (_mod12507.DEBUG_BUILD) {
      const logger = _mod12479.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12496.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12476.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12483.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};