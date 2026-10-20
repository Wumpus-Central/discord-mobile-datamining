// _runtime/12419_errorCallback.js
import _mod12420 from "metro/12420__.js";
import _mod12423 from "metro/12423__.js";
import _mod12427 from "metro/12427__.js";
import spanTimeInputToSeconds from "12428_spanTimeInputToSeconds.js";
import _mod12440 from "metro/12440__.js";
import _mod12451 from "metro/12451__.js";

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
    if (_mod12451.DEBUG_BUILD) {
      const logger = _mod12423.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12440.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12420.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12427.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
