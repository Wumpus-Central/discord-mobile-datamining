// _runtime/12382_errorCallback.js
import _mod12383 from "metro/12383__.js";
import _mod12386 from "metro/12386__.js";
import _mod12390 from "metro/12390__.js";
import spanTimeInputToSeconds from "12391_spanTimeInputToSeconds.js";
import _mod12403 from "metro/12403__.js";
import _mod12414 from "metro/12414__.js";

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
    if (_mod12414.DEBUG_BUILD) {
      const logger = _mod12386.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12403.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12383.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12390.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
