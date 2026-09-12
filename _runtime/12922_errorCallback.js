// === Module 12922: errorCallback ===

// Module 12922 (errorCallback)
import _mod12923 from "module_12923" /* 12923 */;
import _mod12926 from "module_12926" /* 12926 */;
import _mod12930 from "module_12930" /* 12930 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12931 */;
import _mod12943 from "module_12943" /* 12943 */;
import _mod12954 from "module_12954" /* 12954 */;

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = spanTimeInputToSeconds;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = spanTimeInputToSeconds.getRootSpan(activeSpan);
    const tmpResult = spanTimeInputToSeconds;
  }
  if (rootSpan) {
    if (_mod12954.DEBUG_BUILD) {
      const logger = _mod12926.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: _mod12943.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12923.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12930.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};