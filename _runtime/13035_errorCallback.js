// _runtime/13035_errorCallback.js
import _mod13036 from "metro/13036__.js";
import _mod13039 from "metro/13039__.js";
import _mod13043 from "metro/13043__.js";
import spanTimeInputToSeconds from "13044_spanTimeInputToSeconds.js";
import _mod13056 from "metro/13056__.js";
import _mod13067 from "metro/13067__.js";

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
    if (_mod13067.DEBUG_BUILD) {
      const logger = _mod13039.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13056.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13036.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13043.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
