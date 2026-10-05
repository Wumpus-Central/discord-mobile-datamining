// _runtime/00957_browserSessionIntegration.js
import _mod904 from "metro/00904__.js";
import _addMeasureSpans from "00909__addMeasureSpans.js";
import _mod948 from "metro/00948__.js";
import registerSpanErrorInstrumentation from "metro/00693__.js";

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
    },
  };
  return obj;
});
