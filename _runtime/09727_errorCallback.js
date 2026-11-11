// _runtime/09727_errorCallback.js
import _mod9728 from "metro/09728__.js";
import _mod9731 from "metro/09731__.js";
import _mod9735 from "metro/09735__.js";
import spanTimeInputToSeconds from "09736_spanTimeInputToSeconds.js";
import _mod9748 from "metro/09748__.js";
import _mod9759 from "metro/09759__.js";

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
    if (_mod9759.DEBUG_BUILD) {
      const logger = _mod9731.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod9748.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod9728.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod9735.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
