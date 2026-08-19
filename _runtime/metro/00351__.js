// === Module 351: ? ===

// Module 351
import _mod38 from "module_38" /* 38 */;
import FrameRateLoggerDefault from "FrameRateLogger" /* 352 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;
arg5.default = {
  setGlobalOptions(debug) {
    if (undefined !== debug.debug) {
      _mod38(FrameRateLoggerDefault, "Trying to debug FrameRateLogger without the native module!");
    }
    let obj = FrameRateLoggerDefault;
    if (obj != null) {
      obj = { debug: null };
      obj[0] = debug.debug;
      obj.setGlobalOptions(obj);
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