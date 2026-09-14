// _runtime/12923_errorCallback.js
import _mod12924 from "metro/12924__.js";
import _mod12927 from "metro/12927__.js";
import _mod12931 from "metro/12931__.js";
import spanTimeInputToSeconds from "12932_spanTimeInputToSeconds.js";
import _mod12944 from "metro/12944__.js";
import _mod12955 from "metro/12955__.js";

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
    if (_mod12955.DEBUG_BUILD) {
      const logger = _mod12927.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12944.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12924.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12931.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
