// _runtime/13277_errorCallback.js
import _mod13278 from "metro/13278__.js";
import _mod13281 from "metro/13281__.js";
import _mod13285 from "metro/13285__.js";
import spanTimeInputToSeconds from "13286_spanTimeInputToSeconds.js";
import _mod13298 from "metro/13298__.js";
import _mod13309 from "metro/13309__.js";

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
