// === Module 351: ? ===

// Module 351
const require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.default = {
  setGlobalOptions(debug) {
    if (undefined !== debug.debug) {
      require(38)(module(352), "Trying to debug FrameRateLogger without the native module!");
      const tmp3 = require(38);
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