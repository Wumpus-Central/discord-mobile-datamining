// _runtime/12823_errorCallback.js
import _mod12824 from "metro/12824__.js";
import _mod12827 from "metro/12827__.js";
import _mod12831 from "metro/12831__.js";
import spanTimeInputToSeconds from "12832_spanTimeInputToSeconds.js";
import _mod12844 from "metro/12844__.js";
import _mod12855 from "metro/12855__.js";

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = spanTimeInputToSeconds;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = spanTimeInputToSeconds.getRootSpan(activeSpan);
    const tmpResult = spanTimeInputToSeconds;
  }
  if (rootSpan) {
    if (_mod12855.DEBUG_BUILD) {
      const logger = _mod12827.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: _mod12844.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12824.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12831.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
