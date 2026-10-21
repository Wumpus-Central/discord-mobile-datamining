// _runtime/12475_errorCallback.js
import _mod12476 from "metro/12476__.js";
import _mod12479 from "metro/12479__.js";
import _mod12483 from "metro/12483__.js";
import spanTimeInputToSeconds from "12484_spanTimeInputToSeconds.js";
import _mod12496 from "metro/12496__.js";
import _mod12507 from "metro/12507__.js";

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
    if (_mod12507.DEBUG_BUILD) {
      const logger = _mod12479.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12496.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12476.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12483.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
