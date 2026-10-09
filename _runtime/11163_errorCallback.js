// _runtime/11163_errorCallback.js
import _mod11164 from "metro/11164__.js";
import _mod11167 from "metro/11167__.js";
import _mod11171 from "metro/11171__.js";
import spanTimeInputToSeconds from "11172_spanTimeInputToSeconds.js";
import _mod11184 from "metro/11184__.js";
import _mod11195 from "metro/11195__.js";

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
    if (_mod11195.DEBUG_BUILD) {
      const logger = _mod11167.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod11184.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod11164.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod11171.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
