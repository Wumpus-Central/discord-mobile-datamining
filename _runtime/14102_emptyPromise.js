// === Module 14102: emptyPromise ===

// Module 14102 (emptyPromise)
const require = globalThis.__r;

const item = Object.keys(require("module_14103")).forEach((item) => {
  _require = item;
  let tmp = "default" !== item;
  if (tmp) {
    tmp = "__esModule" !== item;
  }
  if (tmp) {
    let tmp3 = item in exports;
    if (tmp3) {
      tmp3 = exports[item] === require("module_14103")[item];
    }
    if (!tmp3) {
      const _Object = Object;
      const obj = {
        enumerable: true,
        get() {
              return require("module_14103")[closure_0];
            }
      };
      Object.defineProperty(exports, item, obj);
    }
  }
});