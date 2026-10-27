// _runtime/12585_errorCallback.js
import _mod12586 from "metro/12586__.js";
import _mod12589 from "metro/12589__.js";
import _mod12593 from "metro/12593__.js";
import spanTimeInputToSeconds from "12594_spanTimeInputToSeconds.js";
import _mod12606 from "metro/12606__.js";
import _mod12617 from "metro/12617__.js";

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
    if (_mod12617.DEBUG_BUILD) {
      const logger = _mod12589.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12606.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12586.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12593.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
