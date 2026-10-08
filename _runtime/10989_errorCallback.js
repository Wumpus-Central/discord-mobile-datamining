// _runtime/10989_errorCallback.js
import _mod10990 from "metro/10990__.js";
import _mod10993 from "metro/10993__.js";
import _mod10997 from "metro/10997__.js";
import spanTimeInputToSeconds from "10998_spanTimeInputToSeconds.js";
import _mod11010 from "metro/11010__.js";
import _mod11021 from "metro/11021__.js";

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
    if (_mod11021.DEBUG_BUILD) {
      const logger = _mod10993.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod11010.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod10990.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod10997.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
