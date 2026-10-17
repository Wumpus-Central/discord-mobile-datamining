// _runtime/12365_errorCallback.js
import _mod12366 from "metro/12366__.js";
import _mod12369 from "metro/12369__.js";
import _mod12373 from "metro/12373__.js";
import spanTimeInputToSeconds from "12374_spanTimeInputToSeconds.js";
import _mod12386 from "metro/12386__.js";
import _mod12397 from "metro/12397__.js";

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
    if (_mod12397.DEBUG_BUILD) {
      const logger = _mod12369.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12386.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12366.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12373.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
