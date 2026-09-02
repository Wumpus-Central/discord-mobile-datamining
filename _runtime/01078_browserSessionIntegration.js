// _runtime/01078_browserSessionIntegration.js
import registerSpanErrorInstrumentation from "00814_registerSpanErrorInstrumentation.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const browserSessionIntegration = registerSpanErrorInstrumentation.defineIntegration(() => ({
  name: "BrowserSession",
  setupOnce() {
    if (undefined !== callback(table[1]).WINDOW.document) {
      let tmpResult = tmp(tmp2[0]);
      tmpResult.startSession({ ignoreDuration: true });
      tmpResult = tmp(tmp2[0]);
      tmpResult.captureSession();
      const result = tmp(tmp2[3]).addHistoryInstrumentationHandler((arg0) => {
        const from = arg0.from;
        if (tmp) {
          callback(814).startSession({ ignoreDuration: true });
          const obj = callback(814);
          callback(814).captureSession();
          const obj2 = callback(814);
        }
      });
      const tmpResult1 = tmp(tmp2[3]);
    } else if (tmp(tmp2[2]).DEBUG_BUILD) {
      const debug = tmp(tmp2[0]).debug;
      debug.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
    }
  },
}));
