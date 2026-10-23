// _runtime/12516_errorCallback.js
import _mod12517 from "metro/12517__.js";
import _mod12520 from "metro/12520__.js";
import _mod12524 from "metro/12524__.js";
import spanTimeInputToSeconds from "12525_spanTimeInputToSeconds.js";
import _mod12537 from "metro/12537__.js";
import _mod12548 from "metro/12548__.js";

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
    if (_mod12548.DEBUG_BUILD) {
      const logger = _mod12520.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12537.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12517.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12524.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
