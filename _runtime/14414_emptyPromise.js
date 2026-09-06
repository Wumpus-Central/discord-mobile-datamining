// _runtime/14414_emptyPromise.js
const item = Object.keys(require("metro/14415__.js")).forEach((item) => {
  _require = item;
  let tmp = "default" !== item;
  if (tmp) {
    tmp = "__esModule" !== item;
  }
  if (tmp) {
    let tmp3 = item in exports;
    if (tmp3) {
      tmp3 = tmp2[item] === require("metro/14415__.js")[item];
    }
    if (!tmp3) {
      const _Object = Object;
      const obj = {
        enumerable: true,
        get() {
          return require("metro/14415__.js")[closure_0];
        },
      };
      Object.defineProperty(tmp2, item, obj);
    }
  }
});
