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
      const activeSpan = _mod682.getActiveSpan();
      if (activeSpan) {
        const rootSpan = _mod682.getRootSpan(activeSpan);
        if (ignoreNextOnError.WINDOW.document.hidden) {
          if (rootSpan) {
            const tmpResult2 = _mod682;
            ({ op, status } = _mod682.spanToJSON(rootSpan));
            if (_mod937.DEBUG_BUILD) {
              const debug = _mod682.debug;
              const _HermesInternal = HermesInternal;
              debug.log("[Tracing] Transaction: " + "cancelled" + " -> since tab moved to the background, op: " + op);
            }
            if (!status) {
              const obj2 = { code: _mod682.SPAN_STATUS_ERROR, message: "cancelled" };
              rootSpan.setStatus(obj2);
            }
            const attr = rootSpan.setAttribute("sentry.cancellation_reason", "document.hidden");
            rootSpan.end();
            const spanToJSONResult = _mod682.spanToJSON(rootSpan);
          }
        }
        const tmpResult = _mod682;
      }
    });
  } else if (_mod937.DEBUG_BUILD) {
    let debug = _mod682.debug;
    debug.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
};