// _runtime/13269_errorCallback.js
import _mod13270 from "metro/13270__.js";
import _mod13273 from "metro/13273__.js";
import _mod13277 from "metro/13277__.js";
import spanTimeInputToSeconds from "13278_spanTimeInputToSeconds.js";
import _mod13290 from "metro/13290__.js";
import _mod13301 from "metro/13301__.js";

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
    if (_mod13301.DEBUG_BUILD) {
      const logger = _mod13273.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13290.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13270.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13277.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
