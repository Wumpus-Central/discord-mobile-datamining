// _runtime/12574_errorCallback.js
import _mod12575 from "metro/12575__.js";
import _mod12578 from "metro/12578__.js";
import _mod12582 from "metro/12582__.js";
import spanTimeInputToSeconds from "12583_spanTimeInputToSeconds.js";
import _mod12595 from "metro/12595__.js";
import _mod12606 from "metro/12606__.js";

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
    if (_mod12606.DEBUG_BUILD) {
      const logger = _mod12578.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12595.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12575.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12582.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
