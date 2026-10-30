// === Module 13000: errorCallback ===

// Module 13000 (errorCallback)
import _mod13001 from "module_13001" /* 13001 */;
import _mod13004 from "module_13004" /* 13004 */;
import _mod13008 from "module_13008" /* 13008 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13009 */;
import _mod13021 from "module_13021" /* 13021 */;
import _mod13032 from "module_13032" /* 13032 */;

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
    if (_mod13032.DEBUG_BUILD) {
      const logger = _mod13004.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13021.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13001.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13008.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}