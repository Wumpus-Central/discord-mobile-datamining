// === Module 12038: errorCallback ===

// Module 12038 (errorCallback)
import _mod12039 from "module_12039" /* 12039 */;
import _mod12042 from "module_12042" /* 12042 */;
import _mod12046 from "module_12046" /* 12046 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12047 */;
import _mod12059 from "module_12059" /* 12059 */;
import _mod12070 from "module_12070" /* 12070 */;

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
    if (_mod12070.DEBUG_BUILD) {
      const logger = _mod12042.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12059.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12039.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12046.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};