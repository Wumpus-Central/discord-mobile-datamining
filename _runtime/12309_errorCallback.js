// === Module 12309: errorCallback ===

// Module 12309 (errorCallback)
import _mod12310 from "module_12310" /* 12310 */;
import _mod12313 from "module_12313" /* 12313 */;
import _mod12317 from "module_12317" /* 12317 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12318 */;
import _mod12330 from "module_12330" /* 12330 */;
import _mod12341 from "module_12341" /* 12341 */;

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
    if (_mod12341.DEBUG_BUILD) {
      const logger = _mod12313.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12330.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12310.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12317.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};