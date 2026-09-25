// _runtime/12291_errorCallback.js
import _mod12292 from "metro/12292__.js";
import _mod12295 from "metro/12295__.js";
import _mod12299 from "metro/12299__.js";
import spanTimeInputToSeconds from "12300_spanTimeInputToSeconds.js";
import _mod12312 from "metro/12312__.js";
import _mod12323 from "metro/12323__.js";

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
    if (_mod12323.DEBUG_BUILD) {
      const logger = _mod12295.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12312.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12292.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12299.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
