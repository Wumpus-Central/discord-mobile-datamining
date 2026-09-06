// === Module 12793: errorCallback ===

// Module 12793 (errorCallback)
import _mod12794 from "module_12794" /* 12794 */;
import _mod12797 from "module_12797" /* 12797 */;
import _mod12801 from "module_12801" /* 12801 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12802 */;
import _mod12814 from "module_12814" /* 12814 */;
import _mod12825 from "module_12825" /* 12825 */;

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
    if (_mod12825.DEBUG_BUILD) {
      const logger = _mod12797.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: _mod12814.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12794.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12801.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};