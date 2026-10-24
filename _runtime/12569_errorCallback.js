// _runtime/12569_errorCallback.js
import _mod12570 from "metro/12570__.js";
import _mod12573 from "metro/12573__.js";
import _mod12577 from "metro/12577__.js";
import spanTimeInputToSeconds from "12578_spanTimeInputToSeconds.js";
import _mod12590 from "metro/12590__.js";
import _mod12601 from "metro/12601__.js";

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
    if (_mod12601.DEBUG_BUILD) {
      const logger = _mod12573.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12590.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12570.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12577.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
