// === Module 14503: emptyPromise ===

// Module 14503 (emptyPromise)
const require = globalThis.__r;

const item = Object.keys(require("module_14504")).forEach((item) => {
  _require = item;
  let tmp = "default" !== item;
  if (tmp) {
    tmp = "__esModule" !== item;
  }
  if (tmp) {
    let tmp3 = item in exports;
    if (tmp3) {
      tmp3 = exports[item] === require("module_14504")[item];
    }
    if (!tmp3) {
      const _Object = Object;
      const obj = {
        enumerable: true,
        get() {
              return require("module_14504")[closure_0];
            }
      };
      Object.defineProperty(exports, item, obj);
    }
  }
});