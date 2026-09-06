// === Module 946: browserSessionIntegration ===

// Module 946 (browserSessionIntegration)
import ignoreNextOnError from "ignoreNextOnError" /* 893 */;
import registerSpanErrorInstrumentation from "module_682" /* 682 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const browserSessionIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "BrowserSession",
  setupOnce() {
    if (undefined !== ignoreNextOnError.WINDOW.document) {
      let tmpResult = tmp(tmp2[0]);
      tmpResult.startSession({ ignoreDuration: true });
      tmpResult = tmp(tmp2[0]);
      tmpResult.captureSession();
      const result = tmp(tmp2[3]).addHistoryInstrumentationHandler((arg0) => {
        const from = arg0.from;
        if (tmp) {
          closure_1_0(682).startSession({ ignoreDuration: true });
          const obj = closure_1_0(682);
          closure_1_0(682).captureSession();
          const obj2 = closure_1_0(682);
        }
      });
      const tmpResult1 = tmp(tmp2[3]);
    } else if (tmp(tmp2[2]).DEBUG_BUILD) {
      const debug = tmp(tmp2[0]).debug;
      debug.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
    }
  }
}));