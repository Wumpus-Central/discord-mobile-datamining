// _runtime/12505_errorCallback.js
import _mod12506 from "metro/12506__.js";
import _mod12509 from "metro/12509__.js";
import _mod12513 from "metro/12513__.js";
import spanTimeInputToSeconds from "12514_spanTimeInputToSeconds.js";
import _mod12526 from "metro/12526__.js";
import _mod12537 from "metro/12537__.js";

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
    if (_mod12537.DEBUG_BUILD) {
      const logger = _mod12509.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12526.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12506.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12513.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
