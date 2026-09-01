// _runtime/metro/00351__.js
import _mod38 from "00038__.js";

require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.default = {
  setGlobalOptions(debug) {
    if (undefined !== debug.debug) {
      _mod38(module(352), "Trying to debug FrameRateLogger without the native module!");
      const tmp3 = _mod38;
    }
    let obj = module(352);
    if (obj != null) {
      obj = { debug: null };
      obj[0] = debug.debug;
      obj.setGlobalOptions(obj);
    }
  },
  setContext(arg0) {
    const obj = module(352);
    if (obj != null) {
      obj.setContext(arg0);
    }
  },
  beginScroll() {
    const obj = module(352);
    if (obj != null) {
      obj.beginScroll();
    }
  },
  endScroll() {
    const obj = module(352);
    if (obj != null) {
      obj.endScroll();
    }
  },
};
