// === Module 13270: errorCallback ===

// Module 13270 (errorCallback)
import _mod13271 from "module_13271" /* 13271 */;
import _mod13274 from "module_13274" /* 13274 */;
import _mod13278 from "module_13278" /* 13278 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13279 */;
import _mod13291 from "module_13291" /* 13291 */;
import _mod13302 from "module_13302" /* 13302 */;

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
    if (_mod13302.DEBUG_BUILD) {
      const logger = _mod13274.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13291.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13271.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13278.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}