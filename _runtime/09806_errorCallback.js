// === Module 9806: errorCallback ===

// Module 9806 (errorCallback)
import _mod9807 from "module_9807" /* 9807 */;
import _mod9810 from "module_9810" /* 9810 */;
import _mod9814 from "module_9814" /* 9814 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 9815 */;
import _mod9827 from "module_9827" /* 9827 */;
import _mod9838 from "module_9838" /* 9838 */;

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
    if (_mod9838.DEBUG_BUILD) {
      const logger = _mod9810.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod9827.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod9807.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod9814.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}