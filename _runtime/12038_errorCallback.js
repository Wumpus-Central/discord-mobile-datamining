// _runtime/12038_errorCallback.js
import _mod12039 from "metro/12039__.js";
import _mod12042 from "metro/12042__.js";
import _mod12046 from "metro/12046__.js";
import spanTimeInputToSeconds from "12047_spanTimeInputToSeconds.js";
import _mod12059 from "metro/12059__.js";
import _mod12070 from "metro/12070__.js";

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
    if (_mod12070.DEBUG_BUILD) {
      const logger = _mod12042.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12059.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12039.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12046.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
