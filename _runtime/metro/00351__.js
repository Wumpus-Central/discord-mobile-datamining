// _runtime/metro/00351__.js
import { 00038__ } from "00038__.js";
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.default = {
  setGlobalOptions(debug) {
    if (undefined !== debug.debug) {
      00038__(module(352), "Trying to debug FrameRateLogger without the native module!");
      const tmp3 = 00038__;
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
  }
};