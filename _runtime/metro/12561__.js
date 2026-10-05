// === Module 12561: ? ===

// Module 12561
import _mod12562 from "module_12562" /* 12562 */;
import _mod12565 from "module_12565" /* 12565 */;
import _mod12569 from "module_12569" /* 12569 */;
import _mod12570 from "module_12570" /* 12570 */;
import _mod12582 from "module_12582" /* 12582 */;
import _mod12593 from "module_12593" /* 12593 */;

function errorCallback() {
  const obj = _mod12570;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12570;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12593.DEBUG_BUILD) {
      const logger = _mod12565.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12582.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12562;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12569;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};