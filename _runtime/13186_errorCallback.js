// _runtime/13186_errorCallback.js
import _mod13187 from "metro/13187__.js";
import _mod13190 from "metro/13190__.js";
import _mod13194 from "metro/13194__.js";
import spanTimeInputToSeconds from "13195_spanTimeInputToSeconds.js";
import _mod13207 from "metro/13207__.js";
import _mod13218 from "metro/13218__.js";

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
    if (_mod13218.DEBUG_BUILD) {
      const logger = _mod13190.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13207.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13187.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13194.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
