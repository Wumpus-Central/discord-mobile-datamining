// _runtime/12271_errorCallback.js
import _mod12272 from "metro/12272__.js";
import _mod12275 from "metro/12275__.js";
import _mod12279 from "metro/12279__.js";
import spanTimeInputToSeconds from "12280_spanTimeInputToSeconds.js";
import _mod12292 from "metro/12292__.js";
import _mod12303 from "metro/12303__.js";

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
    if (_mod12303.DEBUG_BUILD) {
      const logger = _mod12275.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12292.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12272.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12279.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
