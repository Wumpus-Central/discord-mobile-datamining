// _runtime/12944_errorCallback.js
import _mod12945 from "metro/12945__.js";
import _mod12948 from "metro/12948__.js";
import _mod12952 from "metro/12952__.js";
import spanTimeInputToSeconds from "12953_spanTimeInputToSeconds.js";
import _mod12965 from "metro/12965__.js";
import _mod12976 from "metro/12976__.js";

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
    if (_mod12976.DEBUG_BUILD) {
      const logger = _mod12948.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12965.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12945.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12952.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
