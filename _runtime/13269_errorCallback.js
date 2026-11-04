// === Module 13269: errorCallback ===

// Module 13269 (errorCallback)
import _mod13270 from "module_13270" /* 13270 */;
import _mod13273 from "module_13273" /* 13273 */;
import _mod13277 from "module_13277" /* 13277 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13278 */;
import _mod13290 from "module_13290" /* 13290 */;
import _mod13301 from "module_13301" /* 13301 */;

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
    if (_mod13301.DEBUG_BUILD) {
      const logger = _mod13273.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13290.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13270.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13277.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}