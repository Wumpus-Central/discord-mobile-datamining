// === Module 13251: errorCallback ===

// Module 13251 (errorCallback)
import _mod13252 from "module_13252" /* 13252 */;
import _mod13255 from "module_13255" /* 13255 */;
import _mod13259 from "module_13259" /* 13259 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13260 */;
import _mod13272 from "module_13272" /* 13272 */;
import _mod13283 from "module_13283" /* 13283 */;

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
    if (_mod13283.DEBUG_BUILD) {
      const logger = _mod13255.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13272.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13252.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13259.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}