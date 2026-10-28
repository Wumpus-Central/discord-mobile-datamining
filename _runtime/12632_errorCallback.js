// _runtime/12632_errorCallback.js
import _mod12633 from "metro/12633__.js";
import _mod12636 from "metro/12636__.js";
import _mod12640 from "metro/12640__.js";
import spanTimeInputToSeconds from "12641_spanTimeInputToSeconds.js";
import _mod12653 from "metro/12653__.js";
import _mod12664 from "metro/12664__.js";

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
    if (_mod12664.DEBUG_BUILD) {
      const logger = _mod12636.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12653.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12633.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12640.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
