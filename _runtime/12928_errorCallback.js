// _runtime/12928_errorCallback.js
import _mod12929 from "metro/12929__.js";
import _mod12932 from "metro/12932__.js";
import _mod12936 from "metro/12936__.js";
import spanTimeInputToSeconds from "12937_spanTimeInputToSeconds.js";
import _mod12949 from "metro/12949__.js";
import _mod12960 from "metro/12960__.js";

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
    if (_mod12960.DEBUG_BUILD) {
      const logger = _mod12932.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12949.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12929.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12936.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
