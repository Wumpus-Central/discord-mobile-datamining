// _runtime/12849_errorCallback.js
import _mod12850 from "metro/12850__.js";
import _mod12853 from "metro/12853__.js";
import _mod12857 from "metro/12857__.js";
import spanTimeInputToSeconds from "12858_spanTimeInputToSeconds.js";
import _mod12870 from "metro/12870__.js";
import _mod12881 from "metro/12881__.js";

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
    if (_mod12881.DEBUG_BUILD) {
      const logger = _mod12853.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12870.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12850.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12857.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
