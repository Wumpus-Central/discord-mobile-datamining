// === Module 12576: ? ===

// Module 12576
import _mod12577 from "module_12577" /* 12577 */;
import _mod12580 from "module_12580" /* 12580 */;
import _mod12584 from "module_12584" /* 12584 */;
import _mod12585 from "module_12585" /* 12585 */;
import _mod12597 from "module_12597" /* 12597 */;
import _mod12608 from "module_12608" /* 12608 */;

function errorCallback() {
  const obj = _mod12585;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (rootSpan) {
    const tmpResult = _mod12585;
    rootSpan = tmpResult.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12608.DEBUG_BUILD) {
      const logger = _mod12580.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const setStatus = rootSpan.setStatus;
    const obj2 = { code: _mod12597.SPAN_STATUS_ERROR, message: "internal_error" };
    setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    const obj = _mod12577;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    const obj2 = _mod12584;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};