// _runtime/13044_errorCallback.js
import _mod13045 from "metro/13045__.js";
import _mod13048 from "metro/13048__.js";
import _mod13052 from "metro/13052__.js";
import spanTimeInputToSeconds from "13053_spanTimeInputToSeconds.js";
import _mod13065 from "metro/13065__.js";
import _mod13076 from "metro/13076__.js";

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
    if (_mod13076.DEBUG_BUILD) {
      const logger = _mod13048.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13065.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13045.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13052.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
