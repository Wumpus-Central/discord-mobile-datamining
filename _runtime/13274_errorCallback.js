// === Module 13274: errorCallback ===

// Module 13274 (errorCallback)
import _mod13275 from "module_13275" /* 13275 */;
import _mod13278 from "module_13278" /* 13278 */;
import _mod13282 from "module_13282" /* 13282 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13283 */;
import _mod13295 from "module_13295" /* 13295 */;
import _mod13306 from "module_13306" /* 13306 */;

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
    if (_mod13306.DEBUG_BUILD) {
      const logger = _mod13278.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13295.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13275.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13282.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}