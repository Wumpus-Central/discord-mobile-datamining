// _runtime/12002_errorCallback.js
import _mod12003 from "metro/12003__.js";
import _mod12006 from "metro/12006__.js";
import _mod12010 from "metro/12010__.js";
import spanTimeInputToSeconds from "12011_spanTimeInputToSeconds.js";
import _mod12023 from "metro/12023__.js";
import _mod12034 from "metro/12034__.js";

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
    if (_mod12034.DEBUG_BUILD) {
      const logger = _mod12006.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12023.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12003.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12010.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
