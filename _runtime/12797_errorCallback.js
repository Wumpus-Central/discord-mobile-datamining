// === Module 12797: errorCallback ===

// Module 12797 (errorCallback)
import _mod12798 from "module_12798" /* 12798 */;
import _mod12801 from "module_12801" /* 12801 */;
import _mod12805 from "module_12805" /* 12805 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12806 */;
import _mod12818 from "module_12818" /* 12818 */;
import _mod12829 from "module_12829" /* 12829 */;

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
    if (_mod12829.DEBUG_BUILD) {
      const logger = _mod12801.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: _mod12818.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12798.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12805.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};