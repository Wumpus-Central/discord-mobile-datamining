// === Module 12480: errorCallback ===

// Module 12480 (errorCallback)
import _mod12481 from "module_12481" /* 12481 */;
import _mod12484 from "module_12484" /* 12484 */;
import _mod12488 from "module_12488" /* 12488 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12489 */;
import _mod12501 from "module_12501" /* 12501 */;
import _mod12512 from "module_12512" /* 12512 */;

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
    if (_mod12512.DEBUG_BUILD) {
      const logger = _mod12484.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12501.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12481.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12488.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};