// === Module 9793: errorCallback ===

// Module 9793 (errorCallback)
import _mod9794 from "module_9794" /* 9794 */;
import _mod9797 from "module_9797" /* 9797 */;
import _mod9801 from "module_9801" /* 9801 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 9802 */;
import _mod9814 from "module_9814" /* 9814 */;
import _mod9825 from "module_9825" /* 9825 */;

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
    if (_mod9825.DEBUG_BUILD) {
      const logger = _mod9797.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod9814.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod9794.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod9801.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}