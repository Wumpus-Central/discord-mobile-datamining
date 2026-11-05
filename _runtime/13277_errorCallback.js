// === Module 13277: errorCallback ===

// Module 13277 (errorCallback)
import _mod13278 from "module_13278" /* 13278 */;
import _mod13281 from "module_13281" /* 13281 */;
import _mod13285 from "module_13285" /* 13285 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13286 */;
import _mod13298 from "module_13298" /* 13298 */;
import _mod13309 from "module_13309" /* 13309 */;

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
    if (_mod13309.DEBUG_BUILD) {
      const logger = _mod13281.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13298.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13278.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13285.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}