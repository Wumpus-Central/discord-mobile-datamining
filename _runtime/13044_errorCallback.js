// === Module 13044: errorCallback ===

// Module 13044 (errorCallback)
import _mod13045 from "module_13045" /* 13045 */;
import _mod13048 from "module_13048" /* 13048 */;
import _mod13052 from "module_13052" /* 13052 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13053 */;
import _mod13065 from "module_13065" /* 13065 */;
import _mod13076 from "module_13076" /* 13076 */;

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
    if (_mod13076.DEBUG_BUILD) {
      const logger = _mod13048.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13065.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13045.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13052.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};