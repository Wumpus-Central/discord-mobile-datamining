// _runtime/00262_setUpIntersectionObserver.js
const require = arg1;
const dependencyMap = arg6;
let c2 = false;
arg5.default = function setUpIntersectionObserver() {
  if (!c2) {
    c2 = true;
    require("00123_polyfillObjectProperty.js") /* polyfillObjectProperty */.polyfillGlobal("IntersectionObserver", () => callback(table[1]).default);
    const obj = require("00123_polyfillObjectProperty.js") /* polyfillObjectProperty */;
  }
};