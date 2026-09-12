// _runtime/12922_errorCallback.js
import _mod12923 from "metro/12923__.js";
import _mod12926 from "metro/12926__.js";
import _mod12930 from "metro/12930__.js";
import spanTimeInputToSeconds from "12931_spanTimeInputToSeconds.js";
import _mod12943 from "metro/12943__.js";
import _mod12954 from "metro/12954__.js";

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
    if (_mod12954.DEBUG_BUILD) {
      const logger = _mod12926.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: _mod12943.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12923.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12930.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
