// _runtime/12480_errorCallback.js
import _mod12481 from "metro/12481__.js";
import _mod12484 from "metro/12484__.js";
import _mod12488 from "metro/12488__.js";
import spanTimeInputToSeconds from "12489_spanTimeInputToSeconds.js";
import _mod12501 from "metro/12501__.js";
import _mod12512 from "metro/12512__.js";

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
    if (_mod12512.DEBUG_BUILD) {
      const logger = _mod12484.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12501.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12481.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12488.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
