// _runtime/12863_errorCallback.js
import _mod12864 from "metro/12864__.js";
import _mod12867 from "metro/12867__.js";
import _mod12871 from "metro/12871__.js";
import spanTimeInputToSeconds from "12872_spanTimeInputToSeconds.js";
import _mod12884 from "metro/12884__.js";
import _mod12895 from "metro/12895__.js";

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
    if (_mod12895.DEBUG_BUILD) {
      const logger = _mod12867.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: _mod12884.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12864.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12871.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
