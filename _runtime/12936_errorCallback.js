// _runtime/12936_errorCallback.js
import _mod12937 from "metro/12937__.js";
import _mod12940 from "metro/12940__.js";
import _mod12944 from "metro/12944__.js";
import spanTimeInputToSeconds from "12945_spanTimeInputToSeconds.js";
import _mod12957 from "metro/12957__.js";
import _mod12968 from "metro/12968__.js";

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
    if (_mod12968.DEBUG_BUILD) {
      const logger = _mod12940.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
    }
    const obj2 = { code: _mod12957.SPAN_STATUS_ERROR, message: "internal_error" };
    rootSpan.setStatus(obj2);
  }
}
let c2 = false;
errorCallback.tag = "sentry_tracingErrorCallback";

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    c2 = true;
    const result = _mod12937.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = _mod12944.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
