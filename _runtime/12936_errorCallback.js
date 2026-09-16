// === Module 12936: errorCallback ===

// Module 12936 (errorCallback)
import _mod12937 from "module_12937" /* 12937 */;
import _mod12940 from "module_12940" /* 12940 */;
import _mod12944 from "module_12944" /* 12944 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12945 */;
import _mod12957 from "module_12957" /* 12957 */;
import _mod12968 from "module_12968" /* 12968 */;

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
    if (_mod12968.DEBUG_BUILD) {
      const logger = _mod12940.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12957.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12937.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12944.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};