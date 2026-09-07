// _runtime/12797_errorCallback.js
import _mod12798 from "metro/12798__.js";
import _mod12801 from "metro/12801__.js";
import _mod12805 from "metro/12805__.js";
import spanTimeInputToSeconds from "12806_spanTimeInputToSeconds.js";
import _mod12818 from "metro/12818__.js";
import _mod12829 from "metro/12829__.js";

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
    if (_mod12829.DEBUG_BUILD) {
      const logger = _mod12801.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: _mod12818.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12798.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12805.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
