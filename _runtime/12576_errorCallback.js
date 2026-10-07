// _runtime/12576_errorCallback.js
import _mod12577 from "metro/12577__.js";
import _mod12580 from "metro/12580__.js";
import _mod12584 from "metro/12584__.js";
import spanTimeInputToSeconds from "12585_spanTimeInputToSeconds.js";
import _mod12597 from "metro/12597__.js";
import _mod12608 from "metro/12608__.js";

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
    if (_mod12608.DEBUG_BUILD) {
      const logger = _mod12580.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12597.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12577.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12584.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
