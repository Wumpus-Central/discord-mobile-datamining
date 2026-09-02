// _runtime/01092_registerBackgroundTabDetection.js
import ignoreNextOnError from "01025_ignoreNextOnError.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.registerBackgroundTabDetection = function registerBackgroundTabDetection() {
  if (ignoreNextOnError.WINDOW.document) {
    const _document = tmp(1025).WINDOW.document;
    const listener = _document.addEventListener("visibilitychange", () => {
      let obj = callback(table[1]);
      const activeSpan = obj.getActiveSpan();
      if (activeSpan) {
        let tmpResult = tmp(tmp2[1]);
        const rootSpan = tmpResult.getRootSpan(activeSpan);
        if (tmp(tmp2[0]).WINDOW.document.hidden) {
          if (rootSpan) {
            tmpResult = tmp(tmp2[1]);
            ({ op, status } = tmpResult.spanToJSON(rootSpan));
            if (tmp(tmp2[2]).DEBUG_BUILD) {
              const debug = tmp(tmp2[1]).debug;
              const _HermesInternal = HermesInternal;
              debug.log("[Tracing] Transaction: " + "cancelled" + " -> since tab moved to the background, op: " + op);
            }
            if (!status) {
              obj = { code: null, message: "cancelled" };
              obj[0] = tmp(tmp2[1]).SPAN_STATUS_ERROR;
              rootSpan.setStatus(obj);
            }
            const attr = rootSpan.setAttribute("sentry.cancellation_reason", "document.hidden");
            rootSpan.end();
            const spanToJSONResult = tmpResult.spanToJSON(rootSpan);
          }
        }
      }
    });
  } else if (tmp(1069).DEBUG_BUILD) {
    let debug = tmp(814).debug;
    debug.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
};
