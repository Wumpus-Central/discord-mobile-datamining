// _runtime/metro/00351__.js
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.default = {
  setGlobalOptions(debug) {
    if (undefined !== debug.debug) {
      require("00038__.js")(module(352), "Trying to debug FrameRateLogger without the native module!");
      const tmp3 = require("00038__.js");
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