// _runtime/12886_errorCallback.js
import _mod12887 from "metro/12887__.js";
import _mod12890 from "metro/12890__.js";
import _mod12894 from "metro/12894__.js";
import spanTimeInputToSeconds from "12895_spanTimeInputToSeconds.js";
import _mod12907 from "metro/12907__.js";
import _mod12918 from "metro/12918__.js";

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
    if (_mod12918.DEBUG_BUILD) {
      const logger = _mod12890.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: _mod12907.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12887.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12894.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
