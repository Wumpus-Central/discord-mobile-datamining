// _runtime/09806_errorCallback.js
import _mod9807 from "metro/09807__.js";
import _mod9810 from "metro/09810__.js";
import _mod9814 from "metro/09814__.js";
import spanTimeInputToSeconds from "09815_spanTimeInputToSeconds.js";
import _mod9827 from "metro/09827__.js";
import _mod9838 from "metro/09838__.js";

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
    if (_mod9838.DEBUG_BUILD) {
      const logger = _mod9810.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod9827.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod9807.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod9814.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
