// === Module 10989: errorCallback ===

// Module 10989 (errorCallback)
import _mod10990 from "module_10990" /* 10990 */;
import _mod10993 from "module_10993" /* 10993 */;
import _mod10997 from "module_10997" /* 10997 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 10998 */;
import _mod11010 from "module_11010" /* 11010 */;
import _mod11021 from "module_11021" /* 11021 */;

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
    if (_mod11021.DEBUG_BUILD) {
      const logger = _mod10993.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod11010.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod10990.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod10997.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};