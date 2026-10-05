// === Module 957: browserSessionIntegration ===

// Module 957 (browserSessionIntegration)
import _mod904 from "module_904" /* 904 */;
import _addMeasureSpans from "_addMeasureSpans" /* 909 */;
import _mod948 from "module_948" /* 948 */;
import registerSpanErrorInstrumentation from "module_693" /* 693 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const browserSessionIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = {
    name: "BrowserSession",
    setupOnce() {
      if (undefined !== _mod904.WINDOW.document) {
        const tmpResult = registerSpanErrorInstrumentation;
        tmpResult.startSession({ ignoreDuration: true });
        const tmpResult3 = registerSpanErrorInstrumentation;
        tmpResult3.captureSession();
        const tmpResult4 = _addMeasureSpans;
        const result = tmpResult4.addHistoryInstrumentationHandler((arg0) => {
          const from = arg0.from;
          const tmp = undefined !== from && from !== arg0.to;
          if (tmp) {
            const obj = closure_1_0(closure_1_1[0]);
            obj.startSession({ ignoreDuration: true });
            const obj2 = closure_1_0(closure_1_1[0]);
            obj2.captureSession();
          }
        });
      } else if (_mod948.DEBUG_BUILD) {
        const debug = registerSpanErrorInstrumentation.debug;
        debug.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
      }
    }
  };
  return obj;
});