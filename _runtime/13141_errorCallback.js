// === Module 13141: errorCallback ===

// Module 13141 (errorCallback)
import _mod13142 from "module_13142" /* 13142 */;
import _mod13145 from "module_13145" /* 13145 */;
import _mod13149 from "module_13149" /* 13149 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13150 */;
import _mod13162 from "module_13162" /* 13162 */;
import _mod13173 from "module_13173" /* 13173 */;

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
    if (_mod13173.DEBUG_BUILD) {
      const logger = _mod13145.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13162.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13142.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13149.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};