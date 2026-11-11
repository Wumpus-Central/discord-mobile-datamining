// === Module 9727: errorCallback ===

// Module 9727 (errorCallback)
import _mod9728 from "module_9728" /* 9728 */;
import _mod9731 from "module_9731" /* 9731 */;
import _mod9735 from "module_9735" /* 9735 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 9736 */;
import _mod9748 from "module_9748" /* 9748 */;
import _mod9759 from "module_9759" /* 9759 */;

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
    if (_mod9759.DEBUG_BUILD) {
      const logger = _mod9731.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod9748.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod9728.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod9735.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}