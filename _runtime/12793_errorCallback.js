// _runtime/12793_errorCallback.js
import _mod12794 from "metro/12794__.js";
import _mod12797 from "metro/12797__.js";
import _mod12801 from "metro/12801__.js";
import spanTimeInputToSeconds from "12802_spanTimeInputToSeconds.js";
import _mod12814 from "metro/12814__.js";
import _mod12825 from "metro/12825__.js";

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
    if (_mod12825.DEBUG_BUILD) {
      const logger = _mod12797.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: _mod12814.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12794.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12801.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
