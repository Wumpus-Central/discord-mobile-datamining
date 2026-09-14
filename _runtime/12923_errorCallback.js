// === Module 12923: errorCallback ===

// Module 12923 (errorCallback)
import _mod12924 from "module_12924" /* 12924 */;
import _mod12927 from "module_12927" /* 12927 */;
import _mod12931 from "module_12931" /* 12931 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12932 */;
import _mod12944 from "module_12944" /* 12944 */;
import _mod12955 from "module_12955" /* 12955 */;

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
    if (_mod12955.DEBUG_BUILD) {
      const logger = _mod12927.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12944.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12924.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12931.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};