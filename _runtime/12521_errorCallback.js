// _runtime/12521_errorCallback.js
import _mod12522 from "metro/12522__.js";
import _mod12525 from "metro/12525__.js";
import _mod12529 from "metro/12529__.js";
import spanTimeInputToSeconds from "12530_spanTimeInputToSeconds.js";
import _mod12542 from "metro/12542__.js";
import _mod12553 from "metro/12553__.js";

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
    if (_mod12553.DEBUG_BUILD) {
      const logger = _mod12525.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12542.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12522.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12529.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
