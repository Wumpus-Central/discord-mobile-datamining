// _runtime/13907_emptyPromise.js
const require = globalThis.__r;

const item = Object.keys(require("metro/13908__.js")).forEach((item) => {
  _require = item;
  let tmp = "default" !== item;
  if (tmp) {
    tmp = "__esModule" !== item;
  }
  if (tmp) {
    let tmp3 = item in exports;
    if (tmp3) {
      tmp3 = exports[item] === require("metro/13908__.js")[item];
    }
    if (!tmp3) {
      const _Object = Object;
      const obj = {
        enumerable: true,
        get() {
          return require("metro/13908__.js")[closure_0];
        },
      };
      Object.defineProperty(exports, item, obj);
    }
  }
});
