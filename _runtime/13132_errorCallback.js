// _runtime/13132_errorCallback.js
import _mod13133 from "metro/13133__.js";
import _mod13136 from "metro/13136__.js";
import _mod13140 from "metro/13140__.js";
import spanTimeInputToSeconds from "13141_spanTimeInputToSeconds.js";
import _mod13153 from "metro/13153__.js";
import _mod13164 from "metro/13164__.js";

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
    if (_mod13164.DEBUG_BUILD) {
      const logger = _mod13136.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13153.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13133.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13140.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
