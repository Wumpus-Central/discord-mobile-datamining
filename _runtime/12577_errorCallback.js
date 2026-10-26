// _runtime/12577_errorCallback.js
import _mod12578 from "metro/12578__.js";
import _mod12581 from "metro/12581__.js";
import _mod12585 from "metro/12585__.js";
import spanTimeInputToSeconds from "12586_spanTimeInputToSeconds.js";
import _mod12598 from "metro/12598__.js";
import _mod12609 from "metro/12609__.js";

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
    if (_mod12609.DEBUG_BUILD) {
      const logger = _mod12581.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12598.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12578.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12585.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
