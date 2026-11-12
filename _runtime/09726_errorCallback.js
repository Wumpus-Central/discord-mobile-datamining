// _runtime/09726_errorCallback.js
import _mod9727 from "metro/09727__.js";
import _mod9730 from "metro/09730__.js";
import _mod9734 from "metro/09734__.js";
import spanTimeInputToSeconds from "09735_spanTimeInputToSeconds.js";
import _mod9747 from "metro/09747__.js";
import _mod9758 from "metro/09758__.js";

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
    if (_mod9758.DEBUG_BUILD) {
      const logger = _mod9730.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod9747.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod9727.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod9734.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
