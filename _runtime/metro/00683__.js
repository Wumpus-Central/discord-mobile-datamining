// _runtime/metro/00683__.js
import spanToJSON from "../00684_spanToJSON.js";
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
        rootSpan = tmp(tmp2[0]).getRootSpan(activeSpan);
        const tmpResult = tmp(tmp2[0]);
      }
      if (rootSpan) {
        if (tmp(tmp2[1]).DEBUG_BUILD) {
          const debug = tmp(tmp2[2]).debug;
          const _HermesInternal = HermesInternal;
          debug.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
        }
        obj = { code: tmp(tmp2[3]).SPAN_STATUS_ERROR, message: "internal_error" };
        rootSpan.setStatus(obj);
      }
    }
    errorCallback.tag = "sentry_tracingErrorCallback";
    c2 = true;
    const result = instrumentError.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = instrumentUnhandledRejection.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};
