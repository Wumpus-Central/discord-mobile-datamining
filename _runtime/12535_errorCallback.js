// === Module 12535: errorCallback ===

// Module 12535 (errorCallback)
import _mod12536 from "module_12536" /* 12536 */;
import _mod12539 from "module_12539" /* 12539 */;
import _mod12543 from "module_12543" /* 12543 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12544 */;
import _mod12556 from "module_12556" /* 12556 */;
import _mod12567 from "module_12567" /* 12567 */;

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
    if (_mod12567.DEBUG_BUILD) {
      const logger = _mod12539.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12556.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12536.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12543.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};