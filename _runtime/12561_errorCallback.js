// === Module 12561: errorCallback ===

// Module 12561 (errorCallback)
import _mod12562 from "module_12562" /* 12562 */;
import _mod12565 from "module_12565" /* 12565 */;
import _mod12569 from "module_12569" /* 12569 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12570 */;
import _mod12582 from "module_12582" /* 12582 */;
import _mod12593 from "module_12593" /* 12593 */;

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
    if (_mod12593.DEBUG_BUILD) {
      const logger = _mod12565.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12582.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12562.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12569.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};