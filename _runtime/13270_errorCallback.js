// _runtime/13270_errorCallback.js
import _mod13271 from "metro/13271__.js";
import _mod13274 from "metro/13274__.js";
import _mod13278 from "metro/13278__.js";
import spanTimeInputToSeconds from "13279_spanTimeInputToSeconds.js";
import _mod13291 from "metro/13291__.js";
import _mod13302 from "metro/13302__.js";

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
    if (_mod13302.DEBUG_BUILD) {
      const logger = _mod13274.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13291.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13271.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13278.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
}
