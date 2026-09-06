// === Module 960: registerBackgroundTabDetection ===

// Module 960 (registerBackgroundTabDetection)
import _mod682 from "module_682" /* 682 */;
import ignoreNextOnError from "ignoreNextOnError" /* 893 */;
import _mod937 from "module_937" /* 937 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const registerBackgroundTabDetection = function registerBackgroundTabDetection() {
  if (ignoreNextOnError.WINDOW.document) {
    const _document = ignoreNextOnError.WINDOW.document;
    const listener = _document.addEventListener("visibilitychange", () => {
      let obj = _mod682;
      const activeSpan = obj.getActiveSpan();
      if (activeSpan) {
        let tmpResult = _mod682;
        const rootSpan = tmpResult.getRootSpan(activeSpan);
        if (ignoreNextOnError.WINDOW.document.hidden) {
          if (rootSpan) {
            tmpResult = _mod682;
            ({ op, status } = tmpResult.spanToJSON(rootSpan));
            if (_mod937.DEBUG_BUILD) {
              const debug = _mod682.debug;
              const _HermesInternal = HermesInternal;
              debug.log("[Tracing] Transaction: " + "cancelled" + " -> since tab moved to the background, op: " + op);
            }
            if (!status) {
              obj = { code: _mod682.SPAN_STATUS_ERROR, message: "cancelled" };
              rootSpan.setStatus(obj);
            }
            const attr = rootSpan.setAttribute("sentry.cancellation_reason", "document.hidden");
            rootSpan.end();
            const spanToJSONResult = tmpResult.spanToJSON(rootSpan);
          }
        }
      }
    });
  } else if (_mod937.DEBUG_BUILD) {
    let debug = _mod682.debug;
    debug.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
};