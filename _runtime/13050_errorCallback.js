// _runtime/13050_errorCallback.js
import _mod13051 from "metro/13051__.js";
import _mod13054 from "metro/13054__.js";
import _mod13058 from "metro/13058__.js";
import spanTimeInputToSeconds from "13059_spanTimeInputToSeconds.js";
import _mod13071 from "metro/13071__.js";
import _mod13082 from "metro/13082__.js";

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
    if (_mod13082.DEBUG_BUILD) {
      const logger = _mod13054.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod13071.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod13051.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod13058.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
