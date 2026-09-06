// _runtime/metro/00351__.js
import _mod38 from "00038__.js";
import FrameRateLoggerDefault from "../00352_FrameRateLogger.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export default {
  setGlobalOptions(debug) {
    if (undefined !== debug.debug) {
      _mod38(FrameRateLoggerDefault, "Trying to debug FrameRateLogger without the native module!");
    }
    let obj = FrameRateLoggerDefault;
    if (obj != null) {
      obj = { debug: debug.debug };
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
  },
};
