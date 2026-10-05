// === Module 351: ? ===

// Module 351
import _mod38 from "module_38" /* 38 */;
import FrameRateLoggerDefault from "FrameRateLogger" /* 352 */;


export default {
  setGlobalOptions(debug) {
    if (undefined !== debug.debug) {
      const tmp3 = _mod38;
      tmp3(FrameRateLoggerDefault, "Trying to debug FrameRateLogger without the native module!");
    }
    const obj = FrameRateLoggerDefault;
    if (obj != null) {
      const obj2 = { debug: debug.debug };
      obj.setGlobalOptions(obj2);
    }
  },
  setContext(arg0) {
    const obj = FrameRateLoggerDefault;
    if (obj != null) {
      obj.setContext(arg0);
    }
  },
  beginScroll() {
    const obj = FrameRateLoggerDefault;
    if (obj != null) {
      obj.beginScroll();
    }
  },
  endScroll() {
    const obj = FrameRateLoggerDefault;
    if (obj != null) {
      obj.endScroll();
    }
  }
};