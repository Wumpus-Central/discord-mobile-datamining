// === Module 12576: errorCallback ===

// Module 12576 (errorCallback)
import _mod12577 from "module_12577" /* 12577 */;
import _mod12580 from "module_12580" /* 12580 */;
import _mod12584 from "module_12584" /* 12584 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12585 */;
import _mod12597 from "module_12597" /* 12597 */;
import _mod12608 from "module_12608" /* 12608 */;

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
    if (_mod12608.DEBUG_BUILD) {
      const logger = _mod12580.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12597.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12577.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12584.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};