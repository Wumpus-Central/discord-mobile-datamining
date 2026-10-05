// _runtime/metro/00694__.js
import TRACE_FLAG_NONE from "../00695_TRACE_FLAG_NONE.js";
import _mod699 from "00699__.js";
import CONSOLE_LEVELS from "../00700_CONSOLE_LEVELS.js";
import SPAN_STATUS_ERROR from "../00716_SPAN_STATUS_ERROR.js";
import _mod725 from "00725__.js";
import _mod727 from "00727__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c2 = false;

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  const tmp = c2;
  if (!tmp) {
    function errorCallback() {
      const obj = TRACE_FLAG_NONE;
      const activeSpan = obj.getActiveSpan();
      let rootSpan = activeSpan;
      if (rootSpan) {
        const tmpResult = TRACE_FLAG_NONE;
        rootSpan = tmpResult.getRootSpan(activeSpan);
      }
      if (rootSpan) {
        if (_mod699.DEBUG_BUILD) {
          const debug = CONSOLE_LEVELS.debug;
          const _HermesInternal = HermesInternal;
          debug.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
        }
        const setStatus = rootSpan.setStatus;
        const obj2 = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "internal_error" };
        setStatus(obj2);
      }
    }
    errorCallback.tag = "sentry_tracingErrorCallback";
    c2 = true;
    let obj = _mod725;
    const result = obj.addGlobalErrorInstrumentationHandler(errorCallback);
    let obj2 = _mod727;
    const result1 = obj2.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
