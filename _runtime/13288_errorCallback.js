// _runtime/13288_errorCallback.js
import _mod13289 from "metro/13289__.js";
import _mod13292 from "metro/13292__.js";
import _mod13296 from "metro/13296__.js";
import spanTimeInputToSeconds from "13297_spanTimeInputToSeconds.js";
import _mod13309 from "metro/13309__.js";
import _mod13320 from "metro/13320__.js";

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
    if (_mod13320.DEBUG_BUILD) {
      const logger = _mod13292.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13309.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13289.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13296.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
