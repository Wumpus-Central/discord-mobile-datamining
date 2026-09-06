// _runtime/12793_errorCallback.js
import _mod12794 from "metro/12794__.js";
import _mod12801 from "metro/12801__.js";
import spanTimeInputToSeconds from "12802_spanTimeInputToSeconds.js";

require = arg1;
const dependencyMap = arg6;
function errorCallback() {
  let obj = spanTimeInputToSeconds;
  const activeSpan = obj.getActiveSpan();
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = tmp(12802).getRootSpan(activeSpan);
    const tmpResult = tmp(12802);
  }
  if (rootSpan) {
    if (tmp(12825).DEBUG_BUILD) {
      const logger = tmp(12797).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    obj = { code: tmp(12814).SPAN_STATUS_ERROR, message: "internal_error" };
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
