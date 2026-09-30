// === Module 12510: errorCallback ===

// Module 12510 (errorCallback)
import _mod12511 from "module_12511" /* 12511 */;
import _mod12514 from "module_12514" /* 12514 */;
import _mod12518 from "module_12518" /* 12518 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12519 */;
import _mod12531 from "module_12531" /* 12531 */;
import _mod12542 from "module_12542" /* 12542 */;

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
    if (_mod12542.DEBUG_BUILD) {
      const logger = _mod12514.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12531.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12511.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12518.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};