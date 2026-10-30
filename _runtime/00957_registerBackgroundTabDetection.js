// _runtime/00957_registerBackgroundTabDetection.js
import _mod681 from "metro/00681__.js";
import ignoreNextOnError from "00890_ignoreNextOnError.js";
import _mod934 from "metro/00934__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function registerBackgroundTabDetection() {
  if (ignoreNextOnError.WINDOW.document) {
    const _document = ignoreNextOnError.WINDOW.document;
    const listener = _document.addEventListener("visibilitychange", () => {
      const activeSpan = _mod681.getActiveSpan();
      if (activeSpan) {
        const rootSpan = _mod681.getRootSpan(activeSpan);
        if (ignoreNextOnError.WINDOW.document.hidden) {
          if (rootSpan) {
            const tmpResult2 = _mod681;
            ({ op, status } = _mod681.spanToJSON(rootSpan));
            if (_mod934.DEBUG_BUILD) {
              const debug = _mod681.debug;
              const _HermesInternal = HermesInternal;
              debug.log("[Tracing] Transaction: " + "cancelled" + " -> since tab moved to the background, op: " + op);
            }
            if (!status) {
              const obj2 = { code: _mod681.SPAN_STATUS_ERROR, message: "cancelled" };
              rootSpan.setStatus(obj2);
            }
            const attr = rootSpan.setAttribute("sentry.cancellation_reason", "document.hidden");
            rootSpan.end();
            const spanToJSONResult = _mod681.spanToJSON(rootSpan);
          }
        }
        const tmpResult = _mod681;
      }
    });
  } else if (_mod934.DEBUG_BUILD) {
    let debug = _mod681.debug;
    debug.warn("[Tracing] Could not set up background tab detection due to lack of global document");
  }
}
