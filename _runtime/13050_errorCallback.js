// === Module 13050: errorCallback ===

// Module 13050 (errorCallback)
import _mod13051 from "module_13051" /* 13051 */;
import _mod13054 from "module_13054" /* 13054 */;
import _mod13058 from "module_13058" /* 13058 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13059 */;
import _mod13071 from "module_13071" /* 13071 */;
import _mod13082 from "module_13082" /* 13082 */;

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
    if (_mod13082.DEBUG_BUILD) {
      const logger = _mod13054.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13071.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13051.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13058.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};