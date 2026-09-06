// _runtime/metro/00683__.js
import spanToJSON from "../00684_spanToJSON.js";
import _mod688 from "00688__.js";
import consoleSandbox from "../00689_consoleSandbox.js";
import SPAN_STATUS_ERROR from "../00705_SPAN_STATUS_ERROR.js";
import instrumentError from "../00714_instrumentError.js";
import instrumentUnhandledRejection from "../00716_instrumentUnhandledRejection.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c2 = false;

export const registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    function errorCallback() {
      let obj = spanToJSON;
      const activeSpan = obj.getActiveSpan();
      let rootSpan = activeSpan;
      if (activeSpan) {
        rootSpan = spanToJSON.getRootSpan(activeSpan);
        const tmpResult = spanToJSON;
      }
      if (rootSpan) {
        if (_mod688.DEBUG_BUILD) {
          const debug = consoleSandbox.debug;
          const _HermesInternal = HermesInternal;
          debug.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
        }
        obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "internal_error" };
        rootSpan.setStatus(obj);
      }
    }
    errorCallback.tag = "sentry_tracingErrorCallback";
    c2 = true;
    const result = instrumentError.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = instrumentUnhandledRejection.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
