// === Module 12849: errorCallback ===

// Module 12849 (errorCallback)
import _mod12850 from "module_12850" /* 12850 */;
import _mod12853 from "module_12853" /* 12853 */;
import _mod12857 from "module_12857" /* 12857 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12858 */;
import _mod12870 from "module_12870" /* 12870 */;
import _mod12881 from "module_12881" /* 12881 */;

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
    if (_mod12881.DEBUG_BUILD) {
      const logger = _mod12853.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12870.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12850.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12857.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}