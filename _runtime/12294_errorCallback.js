// _runtime/12294_errorCallback.js
import _mod12295 from "metro/12295__.js";
import _mod12298 from "metro/12298__.js";
import _mod12302 from "metro/12302__.js";
import spanTimeInputToSeconds from "12303_spanTimeInputToSeconds.js";
import _mod12315 from "metro/12315__.js";
import _mod12326 from "metro/12326__.js";

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
    if (_mod12326.DEBUG_BUILD) {
      const logger = _mod12298.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12315.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12295.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12302.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
