// === Module 12002: errorCallback ===

// Module 12002 (errorCallback)
import _mod12003 from "module_12003" /* 12003 */;
import _mod12006 from "module_12006" /* 12006 */;
import _mod12010 from "module_12010" /* 12010 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12011 */;
import _mod12023 from "module_12023" /* 12023 */;
import _mod12034 from "module_12034" /* 12034 */;

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
    if (_mod12034.DEBUG_BUILD) {
      const logger = _mod12006.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12023.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12003.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12010.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};