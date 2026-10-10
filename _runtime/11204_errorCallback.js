// _runtime/11204_errorCallback.js
import _mod11205 from "metro/11205__.js";
import _mod11208 from "metro/11208__.js";
import _mod11212 from "metro/11212__.js";
import spanTimeInputToSeconds from "11213_spanTimeInputToSeconds.js";
import _mod11225 from "metro/11225__.js";
import _mod11236 from "metro/11236__.js";

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
    if (_mod11236.DEBUG_BUILD) {
      const logger = _mod11208.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod11225.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod11205.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod11212.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
