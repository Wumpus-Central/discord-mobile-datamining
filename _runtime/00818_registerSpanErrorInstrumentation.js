// _runtime/00818_registerSpanErrorInstrumentation.js
import instrumentError from "00849_instrumentError.js";
import instrumentUnhandledRejection from "00851_instrumentUnhandledRejection.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c2 = false;
arg5.registerSpanErrorInstrumentation = function registerSpanErrorInstrumentation() {
  if (!c2) {
    function errorCallback() {
      let obj = callback(table[0]);
      const activeSpan = obj.getActiveSpan();
      let rootSpan = activeSpan;
      if (activeSpan) {
        rootSpan = callback(table[0]).getRootSpan(activeSpan);
        const tmpResult = callback(table[0]);
      }
      if (rootSpan) {
        if (callback(table[1]).DEBUG_BUILD) {
          const debug = callback(table[2]).debug;
          const _HermesInternal = HermesInternal;
          debug.log("[Tracing] Root span: " + "internal_error" + " -> Global error occurred");
        }
        obj = { code: null, message: "internal_error" };
        obj[0] = callback(table[3]).SPAN_STATUS_ERROR;
        rootSpan.setStatus(obj);
      }
    }
    errorCallback.tag = "sentry_tracingErrorCallback";
    c2 = true;
    const result = instrumentError.addGlobalErrorInstrumentationHandler(errorCallback);
    const result1 = instrumentUnhandledRejection.addGlobalUnhandledRejectionInstrumentationHandler(errorCallback);
  }
};